import { Component, OnInit } from '@angular/core';
import {StatementService} from '../../services/statement.service';
import {CurrencyService} from '../../../services/currencies/currency.service';
import {CustomerService} from '../../services/customer.service';
interface InitiatedWithDrawal {
  transactionId: number;
  transactionCode: string;
  transactionStatus: string;
  motive: string;
  amount: number;
}
@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
availableBalance = 0.0;
currentBalance = 0.0;
  currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
  exchangeCurrency;
  exCurrency: any = this.currencyObj.base;
  cdialog = false;
  withdrawalAmount = 0;
  initiatedWithdrawal: InitiatedWithDrawal;
  password = '';
  loading = false;
  initiated = false;
  alerting = false;
  alertMessage = '';
  constructor(private statementService: StatementService,
              private currencyService: CurrencyService,
              private customerService: CustomerService) { }

  ngOnInit() {
    this.alerting = false;
    this.alertMessage = '';
    this.getAccountBalances();
  }

  getAccountBalances() {
    this.statementService.getAccountBalance().subscribe(
      (response: any) => {
        console.log(response);
        this.availableBalance = response.availableBalance;
        this.currentBalance = response.currentBalance;
      },
      (error) => {
        // alert(error.message);
        console.log(error);
      }
    );
  }
 initiateWithdrawal() {
    this.loading = true;
    this.customerService.requestWithDrawalForCash(this.withdrawalAmount, this.password).subscribe(
      (response: any) => {
        this.loading = false;
        this.initiatedWithdrawal = response;
        this.initiated = true;
        this.alerting = true;
        this.password = '';
        this.withdrawalAmount = 0;
        this.alertMessage = 'Withdrawal Initiated. ' +
          'Please Copy the Transaction Code and contact any DLC service Center for CashOut';
        this.getAccountBalances();
      }, (httpError) => {
        this.loading = false;
        this.initiated = false;
        this.alerting = true;
        this.alertMessage = 'Withdrawal Initiation Failed with Cause: ' + httpError.error.message;
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

}
