import { Injectable } from '@angular/core';
import { Product } from './product';
import * as productsJson from '../assets/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductObject(jsonData: any): Product {
    const id: number = jsonData.id;
    const name: string = jsonData.productName;
    const desc: string = jsonData.productDescription;
    const url: string = `assets/${jsonData.productImage}`;
    const price: number = jsonData.productPrice;
    return new Product(id, name, desc, url, price);
  }
  getProducts() {
    const dataFromJson: [] = (productsJson as any).default;
    const productsArray: Product[] = [];
    for (var i = 0; i < dataFromJson.length; i++) {
      const product: Product = this.getProductObject(dataFromJson[i]);
      productsArray.push(product);
    }
    return productsArray;
  }
}
