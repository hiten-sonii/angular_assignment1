import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  async removeItem(id: number) {
    const { AlertComponent } = await import('../alert/alert.component');
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const componentRef = this.vcref.createComponent(factory);
    componentRef.instance.emitter.subscribe((check) => {
      if (check) {
        componentRef.destroy();
        this.products = this.products.filter(
          (element) => element.productId !== id
        );
      } else {
        componentRef.destroy();
      }
    });
  }
}
