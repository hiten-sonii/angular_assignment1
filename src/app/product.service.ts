import { Injectable } from '@angular/core';
import { Product } from './product';
import * as productsJson from '../assets/products.json';

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

  removeProduct(id: number) {
    this.productsArray = this.productsArray.filter(
      (element) => element.id !== id
    );
    localStorage.setItem('localData', JSON.stringify(this.productsArray));
  }
}
