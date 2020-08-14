import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {CustomerService} from './services/customer.service';
import {AuthserviceService} from '../public/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerActivatedGuardService implements CanActivate, CanActivateChild {

  constructor(private customerService: CustomerService,
              private router: Router, private authservice: AuthserviceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkActivation(url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  checkActivation (url) {
    if (this.customerService.loadCustomerDetails().activated) {
      return true;
    }
    this.authservice.redirectUrl = url;
    // redirect to signin page
    this.router.navigate(['/products']);
    return false;
  }
}
