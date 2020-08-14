import { Component, OnInit, Input} from '@angular/core';
import {Permission} from '../../services/customer.service';
@Component({
  selector: '[app-sidebar-link]',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent implements OnInit {
  @Input() permission: Permission;
  constructor() { }

  ngOnInit() {
  }

}
