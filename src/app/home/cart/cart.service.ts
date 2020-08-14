import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { cartUrls} from "../../services/app-http/backendUrlStrings";
import {isArray} from "util";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  activated = false;
  registrationOrderObj: any;
  currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }
  cartItems;
  subTotal = 0;
  addItemToCart(item: any) {
    if (!isArray(item)) {
      item = [item];
    }
    return this.http.post(cartUrls.ADDTOCART, item);
  }
  addItemToRegistrationCart(item: any, orderId: number) {
    if (!isArray(item)) {
      item = [item];
    }
    return this.http.post(cartUrls.REGISTRATION_ADD_TO_CART + '?orderId=' + orderId, item);
  }
  updateCartCount(count: number) {
    this.currentCartCount.next(count);
    console.log(this.currentCartCount.value);
  }
  updateCart(item) {
    return this.http.post(cartUrls.UPDATECART, item);
  }
  getCartItems() {
    return this.http.get(cartUrls.GETCARTITEMS).map(
      (response: any) => {
        const cartItems = response.data;
        return cartItems;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  removeCartItem(id: any) {
    return this.http.post(cartUrls.REMOVE, id);
  }
  emptyCart() {
    return this.http.delete(cartUrls.CLEARCART);
  }
  checkout(activated: boolean = true, orderId: number = 0,
           shipTo: any = {countryId: 38, address: '', city: '', state: ''}) {
    if (activated) {
      return this.http.post(cartUrls.CHECKOUT, shipTo);
    } else {
      return this.checkoutRegistrationCart(orderId, shipTo);
    }
  }
  checkoutRegistrationCart(orderId: number, shipTo: any = null) {
    return this.http.post(cartUrls.REGISTRATION_CHECKOUT + '?orderId=' + orderId, shipTo);
  }
  updateCartItem(productId: number, quantity: number) {
    return this.http.post(cartUrls.UPDATECART, [{productId: productId, quantity: quantity}]);
  }
}
