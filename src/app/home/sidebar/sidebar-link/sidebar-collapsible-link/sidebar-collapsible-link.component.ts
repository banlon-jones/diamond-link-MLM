import { Component, OnInit, Input } from '@angular/core';
import {CollapsiblePermission} from '../../../services/customer.service';

@Component({
  selector: '[app-sidebar-collapsible-link]',
  templateUrl: './sidebar-collapsible-link.component.html',
  styleUrls: ['./sidebar-collapsible-link.component.scss']
})
export class SidebarCollapsibleLinkComponent implements OnInit {
  @Input() collapsiblePermission: CollapsiblePermission;
  public isCollapsed;
  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
  }

}
