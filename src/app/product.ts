export class Product {
  productId: number;
  productName: string;
  productDesc: string;
  productPrice: number;
  productImageUrl: string;

  constructor(
    id: number,
    name: string,
    desc: string,
    url: string,
    price: number
  ) {
    this.productId = id;
    this.productName = name;
    this.productDesc = desc;
    this.productImageUrl = url;
    this.productPrice = price;
  }
}
