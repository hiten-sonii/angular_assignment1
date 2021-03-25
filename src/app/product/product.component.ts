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
  @Output() removeItemEvent: EventEmitter<number> = new EventEmitter<number>();
  showMore: boolean;
  constructor() {
    this.showMore = false;
  }
  ngOnInit(): void {}
  removeItem(): void {
    this.removeItemEvent.emit(1);
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
