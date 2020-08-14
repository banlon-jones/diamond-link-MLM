import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PaymentsService} from '../payments.service';

@Component({
  selector: '[app-payment-order-row]',
  templateUrl: './payment-order-row.component.html',
  styleUrls: ['./payment-order-row.component.scss']
})
export class PaymentOrderRowComponent implements OnInit {
@Input() orderItem: any;
@Input() orderDate: any;
@Input() exCurrency: any;
  constructor(private paymentService: PaymentsService) { }

  ngOnInit() {
  }
  showDashboard(orderId: number, amount: number) {
    console.log('Setting order to pay...');
    this.paymentService.setOrderToPay({orderId: orderId, payingAmount: amount});
  }
  getRatedPrice(price: any) {
    return price * this.exCurrency.rate;
  }
}
