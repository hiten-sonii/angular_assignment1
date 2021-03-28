import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../modules/core/products/services/product.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  types: string[];
  brands: string[];
  maxPrice: number = 100000;
  selectedBrand: string;
  selectedType: string;
  ngOnInit(): void {
    this.productService.getProducts();
    this.types = this.productService.getProductTypes();
  }

  getBrands() {
    this.brands = this.productService.getBrandsByType(this.selectedType);
  }

  navigateToProducts() {
    this.router.navigate(['/filtered'], {
      queryParams: {
        productType: this.selectedType,
        maxPrice: this.maxPrice,
        brandName: this.selectedBrand,
      },
    });
  }
}
