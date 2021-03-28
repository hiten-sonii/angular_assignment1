import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Product } from '../../../../../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

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
    this.route.queryParams.subscribe((params) => {
      if (params.productType) {
        this.products = this.productService.getProductsByFilter(params);
      } else {
        this.products = this.productService.getProducts();
      }
    });
  }

  async showRemoveDialog(temp: number, index: number) {
    const { AlertComponent } = await import(
      '../../../../shared/alert/components/alert.component'
    );
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const componentRef = this.vcref.createComponent(factory);
    componentRef.instance.emitter.subscribe((check: boolean) => {
      if (check) {
        const removedProduct = this.products[index];
        this.products.splice(index, 1);
        this.productService.removeProduct(index);
        this.loadUndoComponent(removedProduct, index);
      }
      componentRef.destroy();
    });
  }
  async loadUndoComponent(removedProduct: Product, index: number) {
    const { UndoComponent } = await import(
      '../../../../shared/undo/undo.component'
    );
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
