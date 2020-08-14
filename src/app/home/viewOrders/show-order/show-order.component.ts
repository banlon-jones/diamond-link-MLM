import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-show-order]',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {
@Input() order: any;
  constructor() { }

  ngOnInit() {
  }

  getDate(date: number) {
    return Date.now();
  }

}
