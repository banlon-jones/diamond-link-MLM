import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {AuthserviceService} from "../../public/authservice.service";
import {BASE_URI, IMAGE_BASE_URI} from '../../services/app-http/backendUrlStrings';
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {

  cartCount: any;
  public sidebarOpened = false;
  public customerDetails: any;
  public base_uri = BASE_URI;
  public image_base_uri = IMAGE_BASE_URI;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    } else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }

  constructor(config: NgbDropdownConfig,
              private router: Router,
              private authservice: AuthserviceService,
              private cartService: CartService,
              ) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    this.getCartItems();

  }

  logout() {
    this.authservice.signOut();
    this.router.navigate(['/signin']);
  }
  getCustomerDetails() {
    return JSON.parse(this.authservice.retrieveCustomerDetails());
  }
  getCartItems() {
     this.cartService.currentCartCount.subscribe(mgs => {
       this.cartCount = mgs;
     });
  }
  removeItem(id: number) {
    this.cartService.removeCartItem(id);
    this.getCartItems();
  }

}
