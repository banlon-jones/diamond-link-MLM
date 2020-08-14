import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../../services/currencies/currency.service';
import {CustomerService} from '../services/customer.service';
import {MessageService} from 'primeng/api';
interface PayCashTransaction {
  amount: number;
  code: string;
  confirmedBy: string;
  createdAt: any;
  creditAccount: string;
  debitAccount: string;
  id: number;
  initiatedBy: string;
  motive: string;
  onBehalfOf: string;
  status: string;
  updatedAt: any;
}
@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
  styleUrls: ['./manage-transactions.component.scss'],
  providers: [MessageService]
})
export class ManageTransactionsComponent implements OnInit {
  currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
  exchangeCurrency;
  exCurrency: any = this.currencyObj.base;
  cdialog = false;
  found = false;
  transaction: PayCashTransaction;
  transactionCode = '';
  loading = false;
  constructor(private currencyService: CurrencyService,
              private customerService: CustomerService,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  getTransaction() {
    this.loading = true;
    this.customerService.getTransactionDetails(this.transactionCode).subscribe(
      (response: PayCashTransaction) => {
        this.transaction = response;
        this.loading = false;
        this.found = true;
      }, (httpError) => {
        this.loading = false;
        console.log(httpError);
        this.toastSingle({message: 'Oops. Sorry! ' + httpError.error.message, severity: 'error', summary: 'error'});
      }
    );
  }
  confirmTransaction(confirm: boolean) {
    this.loading = true;
    this.customerService.confirmTransaction(confirm, this.transaction.code, this.transaction.motive).subscribe(
      () => {
        this.loading = false;
        this.found = false;
        const message = confirm ? 'Transaction confirmed!' : 'Transaction Cancelled!';
        this.transactionCode = '';
        this.toastSingle({message: message, severity: 'success', summary: 'success'});
      }, (httpError) => {
        this.loading = false;
        this.found = false;
        this.toastSingle({message: 'Oops. Sorry! ' + httpError.error.message, severity: 'error', summary: 'error'});
      }
    );
  }

  getAvailableCurrencies() {
    return this.currencyService.getCurrencyObj();
  }
  getCurrencyObj() {
    return this.currencyService.getCurrencyObj();
  }
  getExchangeCurrency() {
    if (this.exchangeCurrency === undefined ) {
      return this.currencyObj.base;
    }
    this.exCurrency = this.currencyService.getExchangeCurrency(this.exchangeCurrency);
    return this.exCurrency;
  }
  getRatedAmount(amount: any) {
    return amount * this.exCurrency.rate;
  }
  showCurrencyDialog() {
    this.cdialog = true;
  }
  hideCurrencyDialog() {
    this.cdialog = false;
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
}
