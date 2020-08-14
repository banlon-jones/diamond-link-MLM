import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthserviceService } from "../authservice.service";
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';
import {MessageService} from 'primeng/api';
import {ErrorBagService} from '../../services/errors/error-bag.service';
import {ToastrService} from '../../services/toastr/toastr.service';
import {ProductsService} from '../../home/manage-products/products.service';
import {RegCartServiceService} from './reg-cart-service.service';
import {Product} from '../../services/interfaces/products.interface';
import {productImageBaseUrl} from '../../services/app-http/backendUrlStrings';
interface CartItem {
  product: any;
  quantity: number;
}
interface CartItemDTO {
  productId: number;
  quantity: number;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService],
})
export class SignupComponent implements OnInit {
  countries;
  packages: any = [];
  signupForm;
  profileForm;
  productForm;
  display = false;
  atProduct = false;
  loading = true;
  products;
  currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
  exchangeCurrency;
  exCurrency: any = this.currencyObj.base;
  pageLinks: Array<any> = [];
  public base_url = productImageBaseUrl.BASE_URI;
  isReferral = false;
  upLineRegistrationCode: any = '';
  registrationPackages: any = [{total: 0.0, products: 0.0, shareCap: 0.0}];
  constructor(
    private authservice: AuthserviceService,
    private route: Router,
    private router: ActivatedRoute,
    private messageService: MessageService,
    private errorBag: ErrorBagService,
    private productService: ProductsService,
    private cartService: RegCartServiceService,
    private toastrService: ToastrService
    ) {
    if (this.authservice.getStatus()) {
      this.route.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    // get signup parameter
    this.router.queryParams.filter(params => params.registration_code).subscribe(
      (params: any) => {
        console.log(params);
        this.upLineRegistrationCode = params.registration_code;
        this.isReferral = true;
      });
    // signup form
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      countryId: new FormControl('', Validators.required),
      gender: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('')
    });
    this.profileForm = new FormGroup({
      username: new FormControl('', Validators.required),
      upLineRegistrationCode : new FormControl({value: this.upLineRegistrationCode, disabled: this.isReferral},
        Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required)
    });
    this.productForm = new FormGroup({
      registrationPackageId: new FormControl(''),
    });
    this.getCountries();
    this.getPackages();
    this.getRegistrationPackages();
    this.getProducts();
  }
  getCountries() {
    this.authservice.listOfCountries().subscribe(
      (data: any) => {
        this.countries = data;
        this.loading = false;
      },
      (error) => console.log(error)
    );
  }
  getPackages() {
    this.authservice.getPackageList().subscribe(
      (data1: any) => {
        this.packages = data1;
      },
      (error2) => console.log(error2)
    );
  }
  getRegistrationPackages() {
    this.authservice.getRegistrationPackageList().subscribe(
      (response: any) => {
        this.registrationPackages = response.data;
      },
      (error2) => console.log(error2)
    );
  }

  getProducts(pageUri: string = '?page=0&size=3') {
    // this.products = this.productService.getAllProducts();
    this.currencyObj = this.productService.getCurrencyObj();
    this.exCurrency = this.currencyObj.base;
    this.productService.getRegistrationProduct(pageUri).subscribe(
      (response: any) => {
        this.products = response.data;
        this.pageLinks = response.pageLinks === undefined ? [] : response.pageLinks;
        this.loading = false;
        console.log(this.products);
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
  getExchangeCurrency() {
    this.exCurrency = this.productService.getExchangeCurrency(this.exchangeCurrency);
    return this.exCurrency;
  }
  getRatedPrice(price: any) {
    return price * this.exCurrency.rate;
  }
  onSubmit() {
    const personal_info = this.signupForm.value;
    const profile_info = this.profileForm.value;
    const registration_package_info = this.productForm.value;
    const cart_info = this.cartService.getRegistrationCartDTO();
    let user_details;
    if (this.isReferral) {
      user_details = Object.assign(personal_info, profile_info, registration_package_info,
        {upLineRegistrationCode: this.upLineRegistrationCode}, {packageId: this.packages[0].id});
    } else {
      user_details = Object.assign(personal_info, profile_info, registration_package_info,
        {packageId: this.packages[0].id});
    }
   this.authservice.register(user_details).subscribe(
      () => {
        const message = btoa('Registration Successful! Please Check you email inbox for account activation. Thanks for using our Service.');
        this.hideDialog();
        this.authservice.setRegistrationSuccess(true);
        this.route.navigate(['/signin'], {queryParams: {m: message}});
        this.isReferral = false;
      },
      (httpError) => {
        console.log(httpError);
        this.hideDialog();
        this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error'});
      }
    );
  }
// adds an overlay dialog with progress Spinner
  showDialog() {
    this.display = true;
  }
  hideDialog() {
    this.display = false;
  }
  showCurrencyDialog() {
  this.atProduct = true;
  }
  hideCurrencyDialog() {
    this.atProduct = false;
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  getRegistrationCartItems(): Array<CartItem> {
    return this.cartService.getRegistrationCartItems();
  }
  addToRegistrationCart(product: Product, quantity: number) {
    if (product.stock === 0) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' is out of stock.' , severity: 'error', summary: 'error'});
    } else if (quantity > product.stock) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' has only ' +
        product.stock + ' ' + product.measurementUnit.name, severity: 'error', summary: 'error'});
    } else {
      this.cartService.addToRegistrationCart(product, quantity);
    }
  }
  clearRegistrationCart() {
    this.cartService.clearRegistrationCart();
  }
  updateCartItem(product: any, quantity: number) {
    this.cartService.updateCartItem(product, quantity);
  }
  getCartTotal(): number {
    let total = 0.0;
    for (const cartItem of this.cartService.getRegistrationCartItems()) {
      total += this.getRatedPrice(cartItem.product.price) * cartItem.quantity;
    }
    return total;
  }
  restoreCart() {
    this.cartService.restoreCart();
  }
  getCurrencyObj() {
    return this.productService.getCurrencyObj();
  }

  // pagination
  hasNextPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'next') > -1;
  }
  getNextPageUri(): string {
    return this.hasNextPage() ? this.pageLinks.find((f) => f.rel === 'next').uri : '';
  }
  loadNextPage() {
    this.getProducts(this.getNextPageUri());
  }
  hasPrevPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'prev') > -1;
  }
  getPrevPageUri(): string {
    return this.hasPrevPage() ? this.pageLinks.find((f) => f.rel === 'prev').uri : '';
  }
  loadPreviousPage() {
    this.getProducts(this.getPrevPageUri());
  }
  hasFirstPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'first') > -1;
  }
  getFirstPageUri(): string {
    return this.hasFirstPage() ? this.pageLinks.find((f) => f.rel === 'first').uri : '';
  }
  loadFirstPage() {
    this.getProducts(this.getFirstPageUri());
  }
  hasLastPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'last') > -1;
  }
  getLastPageUri(): string {
    return this.hasLastPage() ? this.pageLinks.find((f) => f.rel === 'last').uri : '';
  }
  loadLastPage() {
    this.getProducts(this.getLastPageUri());
  }
}
