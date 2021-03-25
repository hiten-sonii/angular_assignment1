export class Product {
  id: number;
  productType: string;
  brandName: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;

  constructor(
    id: number,
    type: string,
    brand: string,
    name: string,
    desc: string,
    url: string,
    price: number
  ) {
    this.id = id;
    this.productType = type;
    this.brandName = brand;
    this.productName = name;
    this.productDescription = desc;
    this.productImage = `assets/${url}`;
    this.productPrice = price;
  }
}
