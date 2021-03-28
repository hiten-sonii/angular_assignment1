import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';
import * as productsJson from '../../../../../assets/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsArray: Product[];
  constructor() {
    this.productsArray = [];
  }

  getProducts(): Product[] {
    const localData = localStorage.getItem('localData');
    if (!localData) {
      const dataFromJson = (productsJson as any).default;
      this.productsArray = dataFromJson;
      localStorage.setItem('localData', JSON.stringify(this.productsArray));
    } else {
      this.productsArray = JSON.parse(localData);
    }
    return this.productsArray;
  }

  removeProduct(index: number) {
    this.productsArray.splice(index, 1);
    localStorage.setItem('localData', JSON.stringify(this.productsArray));
  }

  addProduct(item: Product, index: number) {
    this.productsArray.splice(index, 0, item);
    localStorage.setItem('localData', JSON.stringify(this.productsArray));
  }

  getProductTypes(): string[] {
    const typesArray: string[] = [];
    this.productsArray.forEach((product) => {
      if (!typesArray.includes(product.productType)) {
        typesArray.push(product.productType);
      }
    });
    return typesArray;
  }

  getBrandsByType(productType: string): string[] {
    const brandsArray: string[] = [];
    this.productsArray.forEach((product) => {
      if (
        product.productType === productType &&
        !brandsArray.includes(product.brandName)
      ) {
        brandsArray.push(product.brandName);
      }
    });
    return brandsArray;
  }

  getProductsByFilter(filter: any): Product[] {
    const filteredArray: Product[] = [];
    this.productsArray.forEach((product) => {
      if (
        product.brandName === filter.brandName &&
        product.productPrice < filter.maxPrice &&
        product.productType === filter.productType
      ) {
        filteredArray.push(product);
      }
    });
    return filteredArray;
  }
}
