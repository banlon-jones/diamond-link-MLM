import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Branch} from '../../../services/interfaces/downlines.service';
import {customerUrls} from '../../../services/app-http/backendUrlStrings';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class DownLinksService {
  branch: Branch;
  constructor(private http: HttpClient) {
   }
  getDownLines(customerId: number) {
    return this.http.get(customerUrls.CUSTOMER_BASE + '/' + customerId + '/down_lines');
  }
  getDirectDownLines() {
    return this.http.get(
      customerUrls.GET_FIRST_DOWN_LINES
    );
  }
}
