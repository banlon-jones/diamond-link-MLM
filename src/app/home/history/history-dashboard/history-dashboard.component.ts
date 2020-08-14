import { Component, OnInit } from '@angular/core';
import {StatementService} from '../../services/statement.service';

@Component({
  selector: 'app-history-dashboard',
  templateUrl: './history-dashboard.component.html',
  styleUrls: ['./history-dashboard.component.scss']
})
export class HistoryDashboardComponent implements OnInit {
paymentHistoryAsSender: Array<any>;
paymentHistoryAsReceiver: Array<any>;
loading = false;
  constructor(private statementService: StatementService) { }

  ngOnInit() {
    this.getPaymentHistories();
    this.loading = false;
  }
  getPaymentHistories() {
    this.loading = true;
    this.statementService.getPaymentHistory().subscribe(
      (response: any) => {
        this.loading = false;
        this.paymentHistoryAsReceiver = response.asReceiver;
        this.paymentHistoryAsSender = response.asSender;
      }, (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
}
