import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PaymentsService, OrderToPay, PayPayCash} from '../payments.service';
import {BASE_URI, IMAGE_BASE_URI} from '../../../services/app-http/backendUrlStrings';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-payment-dashboard',
  templateUrl: './payment-dashboard.component.html',
  styleUrls: ['./payment-dashboard.component.scss'],
  providers: [MessageService]
})
export class PaymentDashboardComponent implements OnInit {
@Input() orderToPay: OrderToPay;
@Input() exCurrency: any;
@Output() onPaymentSuccess: EventEmitter<null> = new EventEmitter<null>();
paymentChannels: Array<any> = [];
paymentChannel: any;
password: string;
voucherCode: string;
phoneNumber: string;
paying = false;
public base_uri = BASE_URI;
public image_base_uri = IMAGE_BASE_URI;
  constructor(private paymentsService: PaymentsService, private messageService: MessageService) { }

  ngOnInit() {
    this.getPaymentChannels();
  }
  getPaymentChannels() {
    this.paymentChannels = this.paymentsService.retrievePaymentChannels();
    console.log(this.paymentChannels);
  }
  getPaymentChannel(channelName: string) {
    this.paymentChannel = this.paymentChannels.find(pChannel => pChannel.name === channelName);
    return this.paymentChannel;
  }
  payWithPayCash() {
    this.showPayDialog();
  this.paymentsService.payWithPayCash({orderId: this.orderToPay.orderId, password: this.password}).subscribe(
    (response) => {
      console.log(response);
      this.onPaymentSuccess.emit();
      this.paymentsService.clearOrderToPay();
      this.password = '';
      this.hidePayDialog();
      this.toastSingle({message: 'Payment Successful',
        severity: 'success', summary: 'success'});
    },
    (httpError) => {
      this.handlePaymentError(httpError);
    }
  );
}
  payWithVoucher() {
    this.showPayDialog();
    this.paymentsService.payWithVoucher({orderId: this.orderToPay.orderId, voucherCode: this.voucherCode}).subscribe(
      (response) => {
        this.hidePayDialog();
        this.toastSingle({message: 'Payment Successful',
          severity: 'success', summary: 'success'});
        console.log(response);
        this.onPaymentSuccess.emit();
        this.paymentsService.clearOrderToPay();
        this.voucherCode = '';
      },
      (httpError) => {
        this.handlePaymentError(httpError);
      }
    );
  }
  payWithMtnMomoBasic() {
    this.showPayDialog();
    this.paymentsService.payWithMtnMomoBasic({orderId: this.orderToPay.orderId, phoneNumber: this.phoneNumber, currency: 'XAF'}).subscribe(
      (response) => {
        this.hidePayDialog();
        this.toastSingle({message: 'Payment Successful',
          severity: 'success', summary: 'success'});
        console.log(response);
        this.onPaymentSuccess.emit();
        this.paymentsService.clearOrderToPay();
        this.phoneNumber = '';
      },
      (httpError) => {
        this.handlePaymentError(httpError);
      }
    );
  }
  isMaxMomoBasic_600(): boolean {
    return this.orderToPay.payingAmount > 600;
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  handlePaymentError(httpError: any) {
    console.log(httpError);
    this.hidePayDialog();
    if (httpError.error.code !== undefined && httpError.error.code === 'VALIDATION_ERROR') {
      for (const errorVal of Object.values(httpError.error.errors)) {
        this.toastSingle({message: 'Oops Sorry! ' + errorVal,
          severity: 'error', summary: 'error'});
      }
    } else {
      this.toastSingle({message: 'Oops Sorry! ' + httpError.error.message,
        severity: 'error', summary: 'error'});
    }
  }
  showPayDialog() {
    this.paying = true;
  }
  hidePayDialog() {
    this.paying = false;
  }
}
