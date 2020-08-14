import { Component, OnInit } from '@angular/core';
import {DownLinksService} from '../../data/down-links.service';
import {DevBootstrapService} from '../../data/dev-bootstrap.service';
import {Branch} from '../../../../services/interfaces/downlines.service';
import {BASE_URI, IMAGE_BASE_URI} from '../../../../services/app-http/backendUrlStrings';

@Component({
  selector: 'app-column-tree',
  templateUrl: './column-tree.component.html',
  styleUrls: ['./column-tree.component.scss']
})
export class ColumnTreeComponent implements OnInit {
  branch: any = {label: null, imageUrl: null, upLineRegistrationCode: null};
  base_uri = BASE_URI;
  image_base_uri = IMAGE_BASE_URI;
  constructor(private downLinks: DownLinksService, private bootstrap: DevBootstrapService) {
   }
   init() {
    //  return this.downLinks.getDirectDownLines().subscribe(branch => branch = this.branch);
     this.downLinks.getDirectDownLines().subscribe(
       (response) => {
         console.log(response);
         this.branch = response;
       }, (error) => {
         console.log(error);
       }
     );
     console.log(this.branch);
   }

   load(customerId: number) {
      //  return this.downLinks.getDownLines(linkToDownLines).subscribe(branch => branch = this.branch);
     this.downLinks.getDownLines(customerId).subscribe(
       (response) => {
         console.log(response);
         this.branch = response;
       }, (error) => {
         console.log(error);
       }
     );
   }

  ngOnInit() {
    this.init();
  }

}
