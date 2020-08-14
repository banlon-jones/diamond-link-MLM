import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthserviceService} from "../authservice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from 'primeng/api';
import {ErrorBagService} from '../../services/errors/error-bag.service';
import {PaymentsService} from '../../home/payments/payments.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [MessageService],
})
export class SigninComponent implements OnInit {

  signinForm;
  loginError = false;
  display = false;
  message: string;
  alerting = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authservice: AuthserviceService,
              private messageService: MessageService,
              private errorBag: ErrorBagService,
              private paymentsService: PaymentsService
             ) {
    if (this.authservice.getStatus()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.route.queryParams.filter(params => params.m).subscribe(
      params => {
        this.message = atob(params.m);
        this.alerting = true;
      });
  }

  // for debugging purposes remove when deploying
  onSubmit() {
  this.authservice.setRegistrationSuccess(false);
    if (this.signinForm.invalid) {
      return;
    } else {
      this.authservice.signin(this.signinForm.value).subscribe(
        (response: any) => {
          // store user token
          this.authservice.storeToken(response.accessToken);
          if (response.accessToken !== null) {
            this.authservice.setStatus('true');
          }
          // store refresh token
          this.authservice.storeRefreshToken(response.refreshToken);
          // store expiresIn
          this.authservice.storeTokenExpiresIn(this.authservice.getExpiresInTimeMillis(response.expiresIn).toString());
          console.log('expiresIn', this.authservice.getExpiresInTimeMillis(response.expiresIn));
          // get customer details
          this.getCustomerDetails();
          // get payment channels
          this.getPaymentChannels();
        },
        (httpError) => {
          this.hideDialog();
          console.log(httpError);
          this.loginError = true;
          console.log(httpError);
          this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError),
            severity: 'error', summary: 'error'});
        }
      );
    }
  }

  getRegistrationSuccess() {
    return this.authservice.getRegistrationSuccess();
  }
  getCustomerDetails() {
    this.authservice.getCustomerDetails().subscribe(
      (response: any) => {
        console.log(response);
        // store the details
        this.authservice.storeCustomerDetails(response);
        this.hideDialog();
        this.userRedirectTo();
      },
      (httpError: HttpErrorResponse) => {
        // because we will intercept when the we receive a customer not found
        // and signout so will have to hide the dialog
        // for the user to proceed with signin
        this.hideDialog();
        this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError),
          severity: 'error', summary: 'error'});
        console.log(httpError);
      }
    );
  }
  getPaymentChannels() {
    return this.paymentsService.getPaymentChannels().subscribe(
      (response) => {
        console.log(response);
        this.paymentsService.storePaymentChannels(response);
      },
      (httpError) => {
        console.log(httpError);
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
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  userRedirectTo() {
    if (JSON.parse(this.authservice.retrieveCustomerDetails()).activated) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/products']);
    }
  }
}
