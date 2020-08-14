import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {loginAndRegisterUrls, customerUrls, utilitiesUrls, IMAGE_BASE_URI} from '../services/app-http/backendUrlStrings';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  // successful registration
  registrationSuccess = false;
  timerId: any;
  refreshTokenState = false;
  detailsRefreshed = false;
  // test values

  constructor(private http: HttpClient, private router: Router) { }
  // get a list of countries
  listOfCountries() {
    return this.http.get(utilitiesUrls.COUNTRIES);
  }

  getPackageList() {
    return this.http.get(utilitiesUrls.PACKAGES);
  }
  getRegistrationPackageList() {
    return this.http.get(utilitiesUrls.REGISTRATION_PACKAGES);
  }
  // sign in
  signin(credentials: any) {
    //
    return this.http.post(loginAndRegisterUrls.LOGIN, credentials);

  }
  upLoadProfilePic(profilePic: any) {
    return this.http.post(customerUrls._PROFILE_UPLOAD, profilePic);
  }
  setResetPassword(passwordObj: any) {
    return this.http.post(loginAndRegisterUrls.SET_RESET_PASSWORD, passwordObj);
  }
  sendResetPasswordCode(email: any) {
    return this.http.post(loginAndRegisterUrls.RESET_PASSWORD, email);
  }
  setStatus(status: string) {
    localStorage.setItem('userAuthenticated', status);
  }
  getStatus() {
    return localStorage.getItem('userAuthenticated') === 'true';
  }
  setRegistrationSuccess(success: boolean) {
    this.registrationSuccess = success;
  }
  getRegistrationSuccess() {
    return this.registrationSuccess;
  }
  register(user_details: any) {
    return this.http.post(loginAndRegisterUrls.REGISTER, user_details);
  }
  getCustomerDetails() {
    return this.http.get(customerUrls._AUTH_CUSTOMER);

  }
  storeToken(token: string) {
    localStorage.setItem('userToken', token);
  }
  storeRefreshToken(token: string) {
    localStorage.setItem('refreshToken', token);

  }
  storeTokenExpiresIn(expiresIn: string) {
    localStorage.setItem('tokenExpiresIn', expiresIn);
  }
  getUserToken() {
    console.log('Accessing user token');
    return this.retrieveFromLocalStorage('userToken');
  }
  storeCustomerDetails(details: any) {
    localStorage.setItem('customerDetails', JSON.stringify(details));
  }
  retrieveCustomerDetails() {
    return this.retrieveFromLocalStorage('customerDetails');
  }
  retrieveAuthCustomerDetials() {
    return localStorage.getItem('customerDetails');
  }
  retrieveTokenExpiresIn() {
    return this.retrieveFromLocalStorage('tokenExpiresIn');
  }
  refreshToken() {
    this.http.post(loginAndRegisterUrls.TOKEN_REFRESH, {refreshToken: this.getRefreshToken() }).subscribe(
      (token: any) => {
        console.log('System: refreshing token');
        this.storeToken(token.accessToken);
        this.storeRefreshToken(token.refreshToken);
        this.storeTokenExpiresIn(this.getExpiresInTimeMillis(token.expiresIn).toString());
        this.refreshCustomerDetails();
        setTimeout(() => this.refreshTokenState = false, 100);
      }, (error) => {
        console.log(error);
        this.refreshTokenState = false;
      }
    );
  }
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
  isUserLogged() {
   return !! this.getUserToken();
 }
 authCheck() {
    return !! localStorage.getItem('userToken');
 }
 refreshCustomerDetails() {
    this.getCustomerDetails().subscribe(
      (response: any) => {
        this.storeCustomerDetails(response);
        console.log('CustomerDetails: refreshed!');
        this.setDetailsState(true);
      } ,
      (httpError) => {
        console.log(httpError);
      }
    );
 }
 retrieveFromLocalStorage(key: string) {
    const value = localStorage.getItem(key.toString());
    if (value === null) {
      // if value is undefined it is possible that user has cleared localstorage
      // therefore user should be signed out and requested to signin again
      // if not the system my not work. the results may be unexpected
      console.log('Local Storage: ' + key);
      console.log('Signing out');
      this.signOut();
    }
    return value;
 }
  getExpiresInTimeMillis(expiresInSeconds: number) {
    const current_millis = new Date().getTime();
    return current_millis + (expiresInSeconds * 1000);
  }
  getRefreshTokenState() {
    return this.refreshTokenState;
  }
  getDetialsState() {
    return this.detailsRefreshed;
  }
  setDetailsState(state: boolean) {
    this.detailsRefreshed = state;
  }
 startRefreshTokenTimeout() {
   this.refreshTokenState = true;
    setTimeout(() => this.refreshToken(), 5);
 }
  // signout
  signOut() {
    // clearInterval(this.timerId);
    localStorage.removeItem('userToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userAuthenticated');
    localStorage.removeItem('customerDetails');
    localStorage.removeItem('paymentChannels');
    localStorage.removeItem('tokenExpiresIn');
    this.router.navigate(['/signin']);
  }


}
