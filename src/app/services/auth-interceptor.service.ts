import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { AuthserviceService } from '../public/authservice.service';
import {BASE_URI, customerUrls, loginAndRegisterUrls, utilitiesUrls} from './app-http/backendUrlStrings';
import {Router} from '@angular/router';
import {tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private accessToken: string;
  constructor(private authService: AuthserviceService, private router: Router) { }
  getAccessToken() {
    // tslint:disable-next-line: max-line-length
    return this.authService.getUserToken();
  }
  getTokenExpiresIn() {
    return Number(this.authService.retrieveTokenExpiresIn());
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service
    let authorization = '';
    // prevent call to signout if userToken is cleared
    // from localstorage
    // if token expires in 15 minutes start refresh token timeout
    if (localStorage.getItem('tokenExpiresIn') !== null) {
      const current_millis = new Date().getTime();
      const expiresIn_15s = this.getTokenExpiresIn() - 900000;
      // refresh token
      if ((current_millis > expiresIn_15s) && !this.authService.getRefreshTokenState()) {
        console.log(current_millis > expiresIn_15s);
        this.authService.startRefreshTokenTimeout();
      }
      if (localStorage.getItem('userToken') !== null) {
        authorization = 'Bearer ' + this.getAccessToken();
      }
    }
    // console.log(authorization);
    let modifiedUrl: string;
    if (req.url.startsWith('https://') || req.url.startsWith('http://')) {
      modifiedUrl = req.url;
    } else {
      modifiedUrl = BASE_URI + req.url;
    }
    /*if (!req.url.includes('https://')) {
       modifiedUrl = BASE_URI + req.url;
    } else {
      modifiedUrl = req.url;
    }*/
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authorization),
      url: modifiedUrl
    });
    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe( tap(
      evt => {
        }, e => {
        if (e instanceof HttpErrorResponse) {
          if (e.status > 400) {
            if (req.url.includes(loginAndRegisterUrls.TOKEN_REFRESH)) {
              console.log('Refresh token expired');
              this.authService.signOut();
            }
          }
          if (req.url.includes(customerUrls._AUTH_CUSTOMER) && e.status > 403) {
            console.log('Customer Details Intercepted');
            this.authService.signOut();
          }
      }}
    ));
  }
}
