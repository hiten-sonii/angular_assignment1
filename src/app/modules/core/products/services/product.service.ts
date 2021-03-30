import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsArray: Product[] = [];
  constructor(private http: HttpClient) {}
  url: string = '../../../../../assets/products.json';

  getProducts(): Observable<Product[]> {
    const localData = localStorage.getItem('localData');
    if (!localData) {
      return this.http.get<Product[]>(this.url).pipe(
        tap((data) => {
          this.productsArray = data;
          localStorage.setItem('localData', JSON.stringify(this.productsArray));
        })
      );
    } else {
      this.productsArray = JSON.parse(localData);
      return of(this.productsArray);
    }
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
