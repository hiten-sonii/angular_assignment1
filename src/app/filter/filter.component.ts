import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor(private productService: ProductService) {}
  types: string[];
  brands: string[];
  maxPrice: number;
  selectedBrand: string;
  selectedType: string;
  ngOnInit(): void {
    this.types = this.productService.getProductTypes();
  }

  getBrands() {
    this.brands = this.productService.getBrandsByType(this.selectedType);
  }

  filterProducts() {
    
  }
}
