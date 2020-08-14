import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CartService} from '../cart.service';

@Component({
  selector: '[app-cart-table-row]',
  templateUrl: './cart-table-row.component.html',
  styleUrls: ['./cart-table-row.component.scss'],
  providers: [MessageService]
})
export class CartTableRowComponent implements OnInit {
  @Input() cartItem: any;
  @Input() price: number;
  @Input() itemIndex: number;
  quantity: number;
@Output() onUpdateCart: EventEmitter<null> = new EventEmitter<null>();
  constructor(private messageService: MessageService, private cartService: CartService) { }

  ngOnInit() {
    this.quantity = this.cartItem.quantity;
  }

  updateCartItem(product: any, quantity: number) {
    console.log('stock: ' + product.stock);
    if (product.stock === 0) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' is out of stock.' , severity: 'error', summary: 'error'});
    } else if (quantity > product.stock) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' has only ' +
      product.stock + ' ' + product.measurementUnit.name, severity: 'error', summary: 'error'});
    } else {
      this.cartService.updateCartItem(product.id, quantity).subscribe(
        (response) => {
          console.log(response);
          this.onUpdateCart.emit();
        }, (error) => {
          console.log(error);
        }
      );
    }
  }
  removeCartItem(id: number) {
    this.cartService.removeCartItem([id]).subscribe(
      (response: any) => {
        console.log(response);
        this.onUpdateCart.emit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
}
