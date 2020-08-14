import { Component, Input, OnInit } from '@angular/core';
import {DevBootstrapService} from '../../data/dev-bootstrap.service';
import {DownLinksService} from '../../data/down-links.service';
import {IMAGE_BASE_URI} from '../../../../services/app-http/backendUrlStrings';

@Component({
  selector: '[app-column-row]',
  templateUrl: './column-row.component.html',
  styleUrls: ['./column-row.component.scss']
})
export class ColumnRowComponent implements OnInit {
  isSet: boolean;
  base_uri = IMAGE_BASE_URI;
  @Input() downlines: any;
  @Input () downline: any;
  constructor (private bootstrap: DevBootstrapService, private downLinks: DownLinksService) {}
  ngOnInit() {
    this.isSet = false;
  }
  displayDownLines(customerId: number) {
    if (!this.isSet) {
      this.downLinks.getDownLines(customerId).subscribe(
        (response: any) => {
          console.log(response);
          this.downlines = response.children;
        }, (error) => {
          console.log(error);
        }
      );
    }
    this.isSet = this.isSet !== true;
  }
}
