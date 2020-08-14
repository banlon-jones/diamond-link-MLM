import { Component, OnInit, Input } from '@angular/core';
import {RegCartServiceService} from '../reg-cart-service.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: '[app-reg-cart-table-row]',
  templateUrl: './reg-cart-table-row.component.html',
  styleUrls: ['./reg-cart-table-row.component.scss'],
  providers: [MessageService],
})
export class RegCartTableRowComponent implements OnInit {
@Input() cartItem: any;
@Input() price: number;
@Input() base_url: any;
quantity: number;
  constructor(private cartService: RegCartServiceService, private messageService: MessageService) { }

  ngOnInit() {
    this.quantity = this.cartItem.quantity;
  }
  removeFromRegistrationCart(productId: number) {
    this.cartService.removeFromRegistrationCart(productId);
  }
  updateCartItem(product: any, quantity: number) {
    console.log('stock: ' + product.stock);
    if (product.stock === 0) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' is out of stock.' , severity: 'error', summary: 'error'});
    } else if (quantity > product.stock) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' has only ' +
      product.stock + ' ' + product.measurementUnit.name, severity: 'error', summary: 'error'});
    } else {
      this.cartService.updateCartItem(product, quantity);
    }
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
}
