import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {utilitiesUrls} from '../app-http/backendUrlStrings';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
  exCurrency: any = this.currencyObj.base;
  constructor(private http: HttpClient) {
    // this.products = this.productService.getAllProducts();
    this.getCurrencies().subscribe(
      (response) => {
        console.log(response);
        this.currencyObj = response;
        this.exCurrency = this.currencyObj.base;
      },
      (error) => {
        console.log(error);
      });
  }
  getExchangeCurrency(exchangeCurrency: string) {
    if (exchangeCurrency === undefined ) {
      return this.currencyObj.base;
    }
    const exStr = '{' + exchangeCurrency + '}';
    console.log(exStr);
    const exObj = JSON.parse(exStr);
    console.log(exObj);
    return exObj;
  }

  getCurrencies() {
    return this.http.get(utilitiesUrls.CURRENCIES);
  }
  getCurrencyObj() {
    return this.currencyObj;
  }
}
