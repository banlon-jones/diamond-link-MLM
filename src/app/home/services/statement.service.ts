import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {statementUrls} from '../../services/app-http/backendUrlStrings';
export interface StatementRequest {
  startDate: Date;
  period: string;
  endDate: Date;
  strict: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class StatementService {

  constructor(private http: HttpClient) { }

  getAccountBalance() {
    return this.http.get(statementUrls.GET_ACCOUNT_BALANCE);
  }
  getAccountListing(request: StatementRequest, pageAndSize: string = '?page=0&size=10') {
    return this.http.post(statementUrls.ACCOUNT_LISTING + pageAndSize, request);
  }
  getStatement(request: StatementRequest) {
    return this.http.post(statementUrls.STATEMENT, request);
  }
  getPaymentHistory() {
    return this.http.get(statementUrls.GET_PAYMENT_HISTORY);
  }

  getBalance() {
    return this.http.get(statementUrls.GET_TRANSACTION_BALANCE);
  }
}
