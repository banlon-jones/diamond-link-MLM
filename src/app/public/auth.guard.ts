import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthserviceService} from './authservice.service';
import {loginAndRegisterUrls} from '../services/app-http/backendUrlStrings';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authservice: AuthserviceService,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin (url: string) {
    // test
    if (this.authservice.authCheck()) {
      return true;
    }
    // else
    // store the attempted URL for redirecting
    this.authservice.redirectUrl = url;
    if (url === '/') {
      // redirect to welcome page
      this.router.navigate(['/welcome']);
    } else {
      // redirect to signin page
      this.router.navigate(['/signin']);
    }
    return false;
  }
}
