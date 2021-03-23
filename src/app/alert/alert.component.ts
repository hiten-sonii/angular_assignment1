import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Output() emitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private vcref: ViewContainerRef) {}

  ngOnInit(): void {}
  confirm(check: boolean) {
    this.emitter.emit(check);
  }
}
