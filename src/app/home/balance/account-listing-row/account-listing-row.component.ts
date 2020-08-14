import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-account-listing-row]',
  templateUrl: './account-listing-row.component.html',
  styleUrls: ['./account-listing-row.component.scss']
})
export class AccountListingRowComponent implements OnInit {
@Input() listingRow: any;
  constructor() { }

  ngOnInit() {
  }

}
