import { Component, OnInit } from '@angular/core';
import {CartService} from "./cart.service";
import {Router} from "@angular/router";
import {CustomerService} from '../services/customer.service';
import {AuthserviceService} from '../../public/authservice.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService]
})
export class CartComponent implements OnInit {
  quantity: number;
  cartItems: any = [];
  subTotal = 0;
  shippingFee = 0;
  taxes = 0 ;
  total = 0;
  activated = false;
  registrationOrderObj: any = null;
  countries = [];
  countryId = 38;
  address = '';
  city = '';
  state = '';
  constructor(
    private cartService: CartService,
    private router: Router,
    private customerService: CustomerService,
    private messageService: MessageService,
    private authService: AuthserviceService
  ) { }

  ngOnInit() {
    this.activated = this.customerService.loadCustomerDetails().activated;
    this.getRegistrationOrder();
    this.getCartItems();
    this.getCountries();
  }

  getCountries() {
    this.authService.listOfCountries().subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error) => console.log(error)
    );
  }
  getRegistrationOrder() {
    this.customerService.getRegistrationOrders().subscribe(
      (response: any) => {
        this.registrationOrderObj = response.data;
      }, (error) => {
        console.log(error);
      }
    );
  }
  updateCart(productId: number, quantity: number) {
    console.log([productId, quantity]);
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(
      (cartItems: any) => {
        this.cartItems = cartItems;
        console.log(this.cartItems);
        this.cartService.updateCartCount(this.cartItems.length);
      },
      (error) => {
        alert(error.message);
        // console.log(error);
      }
    );
  }

  checkoutCart() {
    if (!this.activated) {
      this.cartService.checkout(this.activated,
        this.registrationOrderObj === null ? 0 : this.registrationOrderObj.order.id,
        {countryId: this.countryId, state: this.state, city: this.city, address: this.address}).subscribe(
        (response: any) => {
          this.address = '';
          this.state = '';
          this.city = '';
          this.countryId = 38; // cameroon
          this.cartService.updateCartCount(0);
          this.router.navigate(['/payments']);
          console.log(response);
        },
        (err: any) => {
          console.log(err);
          this.toastSingle({message: 'Oops Sorry! ' + err.error.message, severity: 'error', summary: 'error'});
        }
      );
    } else {
      this.cartService.checkout(true, 0,
        {countryId: this.countryId, state: this.state, city: this.city, address: this.address}).subscribe(
        (response: any) => {
          this.address = '';
          this.state = '';
          this.city = '';
          this.countryId = 38; // cameroon
          this.cartService.updateCartCount(0);
          this.router.navigate(['/payments']);
          console.log(response);
        },
        (err) => {
          console.log(err);
          this.toastSingle({message: 'Oops Sorry! ' + err.error.message, severity: 'error', summary: 'error'});
        }
      );
    }
  }

  removeItem(id: number) {
    this.cartService.removeCartItem([id]).subscribe(
      (response: any) => {
        this.getCartItems();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  emptyCart() {
    this.cartService.emptyCart().subscribe(
      (reponse: any) => {
        console.log(reponse);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getCartTotal(): number {
    let total = 0.0;
    for (const cartItem of this.cartItems) {
      total += cartItem.product.price * cartItem.quantity;
    }
    return total;
  }
  onUpdateCart() {
    this.getCartItems();
  }
  canCheckout() {
    return this.city !== '' && this.state !== '' && this.address !== '' && this.getCartTotal() > 0.0;
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
}
