import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { StatementService } from '../services/statement.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  currentDate = Date.now();
  accountBalance: any = {currentBalance: 0.0 };
  accountSnapshot: any = {
    accumulatedPoints: 0.0,
    level: null,
    currentBalance: 0.0,
    availableBalance: 0.0,
    pointsToNextLevel: 0.0,
    nextLevel: null
  };
  constructor(private statementService: StatementService, private  customerService: CustomerService) { }

  ngOnInit() {
    // this.getTransactionBalance();
    this.getAccountBalance();
    this.getAccountSnapshot();
  }
  getAccountBalance() {
    this.statementService.getAccountBalance().subscribe(
      (response) => {
        console.log(response);
        this.accountBalance = response;
      },
      (error) => {
        // alert(error.message);
        console.log(error);
      }
    );
  }

  getAccountSnapshot() {
    const snapshot = this.customerService.retrieveAccountSanpshot();
    this.accountSnapshot = snapshot === null ? this.accountSnapshot : this.customerService.retrieveAccountSanpshot();
    this.customerService.getAccountSnapshot().subscribe(
      (response) => {
        console.log(response);
        this.accountSnapshot = response;
        this.customerService.storeAccountSnapshot(response);
      },
      (error) => {
        // alert(error.message);
        console.log(error);
      }
    );
  }

  // error in this function
  // I need to get the amount in the customers account and the total number of downlines
  /*
  getTransactionBalance() {
    this.statementService.getBalance().subscribe(
      (response) => {
        console.log(response);
        this.accountBalance = response;
      },
      (error) => {
        alert(error.message);
        // console.log(error);
      }
    );
  }
  */
}
