import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef,
    private route: ActivatedRoute
  ) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.productType) {
        this.products = this.productService.getProductsByFilter(
          params.productType,
          params.productBrand,
          params.maxPrice
        );
      } else {
        this.products = this.productService.getProducts();
      }
    });
  }

  async showRemoveDialog(temp: number, index: number) {
    const { AlertComponent } = await import('../alert/alert.component');
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const componentRef = this.vcref.createComponent(factory);
    componentRef.instance.emitter.subscribe((check: boolean) => {
      if (check) {
        componentRef.destroy();
        const removedProduct = this.products[index];
        this.products.splice(index, 1);
        this.productService.removeProduct(index);
        this.loadUndoComponent(removedProduct, index);
      } else {
        componentRef.destroy();
      }
    });
  }
  async loadUndoComponent(removedProduct: Product, index: number) {
    const { UndoComponent } = await import('../undo/undo.component');
    const factory = this.cfr.resolveComponentFactory(UndoComponent);
    const componentRef = this.vcref.createComponent(factory);
    componentRef.instance.emitter.subscribe((check) => {
      this.productService.addProduct(removedProduct, index);
      componentRef.destroy();
    });
    setTimeout(() => {
      componentRef.destroy();
    }, 5000);
  }
}
