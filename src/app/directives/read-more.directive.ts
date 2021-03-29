import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appReadMore]',
})
export class ReadMoreDirective implements AfterViewInit {
  @Input('appReadMore') showMoreEnabled: any;
  @Input('maxLength') maxLength: number;
  text: string;
  textElement: HTMLParagraphElement;

  @HostListener('click', ['$event']) private fun(e: any) {
    if (e.target.classList.contains('showMoreClass')) {
      if (this.showMoreEnabled) {
        this.textElement.innerText = this.text;
      } else {
        this.textElement.innerText =
          this.text.substr(0, this.maxLength) + '...';
      }
    }
  }
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.textElement = this.elRef.nativeElement.children[0];
    this.text = this.elRef.nativeElement.children[0].innerText;
    this.textElement.innerText = this.text.substr(0, this.maxLength) + '...';
  }
}
