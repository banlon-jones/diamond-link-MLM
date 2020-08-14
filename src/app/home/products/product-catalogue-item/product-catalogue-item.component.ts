import { Component, OnInit, Input } from '@angular/core';
import {CartService} from "../../cart/cart.service";
interface Currency {
  name: string;
  symbol: string;
  rate: number;
  base: boolean;
}
interface Currencies {
  base: Currency;
  currencies: Array<Currency>;
}
@Component({
  selector: '[app-product-catalogue-item]',
  templateUrl: './product-catalogue-item.component.html',
  styleUrls: ['./product-catalogue-item.component.scss']
})
export class ProductCatalogueItemComponent implements OnInit {
  @Input() currencyObj: Currencies;
  @Input() product: any;
  @Input() currency: Currency;
  constructor(
    private  cartService: CartService,
  ) { }

  ngOnInit() {
  }

  getRatedPrice() {
    return this.product.price * this.currency.rate;
  }

}
