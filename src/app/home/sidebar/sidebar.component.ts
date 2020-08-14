import { Component, OnInit} from '@angular/core';
import { AuthserviceService } from '../../public/authservice.service';
import {Router} from "@angular/router";
import {BASE_URI, IMAGE_BASE_URI} from '../../services/app-http/backendUrlStrings';
import {CustomerService, PermissionGroup} from '../services/customer.service';
interface Permission {id: number; name: string; uri: string;
  icon: string; collapsible: boolean; collapseTo: string; displayed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  public isCollapsed;
  public base_uri = BASE_URI;
  public image_base_uri = IMAGE_BASE_URI;
  public permissions: PermissionGroup;
  public customerDetails: any;
  public userActivation: boolean;
  constructor(private authservice: AuthserviceService,
              private route: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.isCollapsed = true;
    this.permissions = this.customerService.getCustomerPermissionRoutes();
    this.customerDetails = this.customerService.loadCustomerDetails();
    this.userActivation = this.customerDetails.activated;
  }
  refreshDetails() {
    console.log('refreshing details..');
    this.permissions = this.customerService.getCustomerPermissionRoutes();
    this.customerDetails = this.customerService.getCustomerPermissionRoutes();
  }
  getCustomerPermission() {
    return this.permissions;
  }
  getCustomerDetails() {
    return this.customerDetails;
  }
  logout() {
    this.authservice.signOut();
  }

  onClickedOutside($event) {

  }
}
