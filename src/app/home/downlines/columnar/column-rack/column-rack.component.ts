import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-column-rack]',
  templateUrl: './column-rack.component.html',
  styleUrls: ['./column-rack.component.scss']
})
export class ColumnRackComponent {
@Input () downlines: any;
}
