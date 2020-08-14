import { Component, OnInit } from '@angular/core';
import {StatementService, StatementRequest} from '../../services/statement.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-balance-dashboard',
  templateUrl: './balance-dashboard.component.html',
  styleUrls: ['./balance-dashboard.component.scss']
})
export class BalanceDashboardComponent implements OnInit {
accountBalance: any;
statementForm;
periods: Array<string>;
statement: any;
listingRows: Array<any>;
pageLinks: any = [];
statementRequest: StatementRequest;
loading = false;
  constructor(private statementService: StatementService) {
    this.accountBalance = {
      name: '',
      currentBalance: 0.0,
      availableBalance: 0.0
    };
  }

  ngOnInit() {
    this.loading = false;
    this.getAccountBalances();
    this.statementForm = new FormGroup({
      startDate: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      endDate: new FormControl(''),
      strict: new FormControl(''),
    });
    this.periods = [
      'Daily',
      'Monthly',
      'Yearly',
      'Any'
    ];
  }
  getAccountBalances() {
    this.loading = true;
    this.statementService.getAccountBalance().subscribe(
      (response: any) => {
        this.accountBalance = response;
        this.loading = false;
      }, (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    this.statementRequest = {
      startDate: this.statementForm.get('startDate').value,
      period: this.statementForm.get('period').value,
      endDate: this.statementForm.get('endDate').value,
      strict: this.statementForm.get('strict').value
    };
    this.loading = true;
    this.statementService.getAccountListing(this.statementRequest).subscribe(
      (response: any) => {
        this.listingRows = response.listingRows;
        this.statement = response.statement;
        this.pageLinks = response.pageLinks;
        this.loading = false;
      }, (error: any) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
  hasNextPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'next') > -1;
  }
  getNextPageUri(): string {
    if (this.hasNextPage()) {
      return this.pageLinks.find((f) => f.rel === 'next').uri;
    }
    return '';
  }
  loadNextPage() {
    this.loading = true;
    this.statementService.getAccountListing(this.statementRequest, this.getNextPageUri()).subscribe(
      (response: any) => {
        this.loading = false;
        // this.listingRows.concat(response.listingRows);
        for (const row of response.listingRows) {
          this.listingRows.push(row);
        }
        this.pageLinks = response.pageLinks;
      }, (error: any) => {
        console.log(error);
      }
    );
  }
}
