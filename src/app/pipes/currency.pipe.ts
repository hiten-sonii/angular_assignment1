import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  currencyMap: { [key: string]: string } = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    JPY: '¥',
  };
  transform(value: number, currName: string): string {
    return this.currencyMap[currName] + ' ' + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
  }
}
