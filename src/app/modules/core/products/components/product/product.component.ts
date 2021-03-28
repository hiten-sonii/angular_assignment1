import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  @Input() item: Product;
  @Output() removeItemEvent: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('description') description: ElementRef;

  showMore: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.description.nativeElement.innerText = 'Show More';
  }
  removeItem(): void {
    this.removeItemEvent.emit(1);
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.description.nativeElement.innerText = this.showMore
      ? 'Show Less'
      : 'Show More';
  }
}
