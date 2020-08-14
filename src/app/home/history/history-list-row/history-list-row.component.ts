import { Component, OnInit, Input } from '@angular/core';
export interface PaymentTransaction {
  amount: number;
  authorizedBy: string;
  comment: string;
  date: Date;
  initiatedBy: string;
  paymentChannel: string;
  paymentTransactionId: string;
  receiverAccount: string;
  senderAccount: string;
  status: string;
  transactionCode: string;
}
@Component({
  selector: '[app-history-list-row]',
  templateUrl: './history-list-row.component.html',
  styleUrls: ['./history-list-row.component.scss']
})
export class HistoryListRowComponent implements OnInit {
@Input() paymentHistoryRow: PaymentTransaction;
  constructor() { }

  ngOnInit() {
  }

}
