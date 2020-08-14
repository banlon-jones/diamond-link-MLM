import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {measurementUnit, productUrl} from "../../services/app-http/backendUrlStrings";
import {PaymentsService} from '../payments/payments.service';
import {CurrencyService} from "../../services/currencies/currency.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private payments: PaymentsService,
    private currencyService: CurrencyService
  ) {  }

  getAllProducts(pageUri: string = '?page=0&size=20') {
    return this.http.get<any> (
      productUrl.GET_PRODUCTS + pageUri);
  }

  getRegistrationProduct(pageUri: string) {
    return this.http.get(productUrl.GET_PRODUCTS + pageUri + '&isRegistrationProduct=true');
  }

  getMeasurementUnit() {
    return this.http.get(measurementUnit.GET_UNIT).map(
      (response: any) => {
        const measurementUnits = response;
        return measurementUnits;
      }
    );
  }

  addProduct(product: any) {
    return this.http.post(productUrl.CREATE_PRODUCT, product);
  }
  updateProduct(product: any) {
    return this.http.post(productUrl.PRODUCT_BASE_PROTECTED + product.id + '/update', product);
  }
  getAvailableCurrencies() {
    return this.currencyService.getCurrencyObj();
}
getCurrencyObj() {
    return this.currencyService.getCurrencyObj();
    // return this.payments.getCurrencies();
  }
  uploadProductImage( formData: any , id: any) {
    return this.http.post(productUrl.PRODUCT_BASE_PROTECTED + id + '/uploadImage', formData);
  }

  getExchangeCurrency(exchangeCurrencyStr: string) {
    return this.currencyService.getExchangeCurrency(exchangeCurrencyStr);
  }
  getProduct(productId) {
    return this.http.get(productUrl.PRODUCT_BASE_PROTECTED + productId + '/info').map(
      (response: any) => {
        const product = response.data;
        return product;
      }
    );
  }
  searchProduct(searchWord) {
    return this.http.get(productUrl.PRODUCT_BASE_PROTECTED + 'search?filter=' + searchWord + '&page=0&size=20').map(
      (response: any) => {
        const products = response.data;
        return products;
      }
    );
  }
}
