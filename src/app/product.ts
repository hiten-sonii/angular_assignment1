export class Product {
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;

  constructor(
    id: number,
    name: string,
    desc: string,
    url: string,
    price: number
  ) {
    this.id = id;
    this.productName = name;
    this.productDescription = desc;
    this.productImage = `assets/${url}`;
    this.productPrice = price;
  }
}
