import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthserviceService} from '../../public/authservice.service';
import {CustomerService} from '../../home/services/customer.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate, CanActivateChild  {
  constructor(
    private authService: AuthserviceService,
    private customerService: CustomerService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkPermissions(url, next);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
  checkPermissions(url: string, route: ActivatedRouteSnapshot) {
    console.log('permission guard');
    // check login
    if (!this.authService.isUserLogged() && !this.customerService.loadCustomerDetails().activated) {
      // redirect to signin page
      this.router.navigate(['/signin']);
      return false;
    }
    // get permissions to check
    const permissionsToCheck: Array<string> = route.data['permissions'];
    // get user permissions
    const userPermissions: Array<string> = this.customerService.getCustomerPermissionList();
    for (const p of permissionsToCheck) {
      // if user has permission to check
      // activate
      if (userPermissions.findIndex((value) => value.toUpperCase() === p.toUpperCase()) > -1) {
        return true;
      }
    }

    // store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    this.router.navigate(['/products']);
    return false;
  }
}
