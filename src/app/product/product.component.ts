import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() item: Product;
  constructor() {}

  @Output() removeItemEvent: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {}
  removeItem(id: number): void {
    console.log(id);
    this.removeItemEvent.emit(id);
  }
}
