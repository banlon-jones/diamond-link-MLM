import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../authservice.service';
import 'rxjs/add/operator/filter';
import {MessageService} from 'primeng/api';
import {ErrorBagService} from '../../services/errors/error-bag.service';

interface SetPasswordReset {
  resetCode: string;
  password: string;
  confirmPassword: string;
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [MessageService],
})
export class ResetPasswordComponent implements OnInit {
  code: string;
  passwordResetForm;
  display = false;
  resetPassword: SetPasswordReset;
  constructor(private route: ActivatedRoute,
              private auth: AuthserviceService, private errorBag: ErrorBagService,
              private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.passwordResetForm = new FormGroup({
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    });
    this.route.queryParams.filter(params => params.ref).subscribe(
      params => {
        console.log(params);
        this.code = params.ref;
      }
    );
  }
  onSubmit() {
    if (this.passwordResetForm.invalid) {
      return;
    } else {
      this.resetPassword = {
        resetCode: this.code,
        password: this.passwordResetForm.get('password').value,
        confirmPassword: this.passwordResetForm.get('passwordConfirm').value
      };
      this.auth.setResetPassword(this.resetPassword).subscribe(
        (response) => {
          const message = btoa('Password Reset Successful. Thanks for using our Services!');
          console.log(response);
          this.hideDialog();
          this.router.navigate(['/signin'], {queryParams: {m: message}});
        },
        (httpError) => {
          console.log(httpError);
          this.hideDialog();
          this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error'});
        }
      );
    }
  }
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
}
