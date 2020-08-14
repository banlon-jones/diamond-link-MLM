import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../authservice.service';
import {MessageService} from 'primeng/api';
import {ErrorBagService} from  '../../services/errors/error-bag.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [MessageService]
})
export class ForgotPasswordComponent implements OnInit {

forgotPasswordForm;
display = false;
message;
emailSent;

  constructor(private auth: AuthserviceService, private errorBag: ErrorBagService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.emailSent = false;
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  onSubmit() {
    this.showDialog();
    this.auth.sendResetPasswordCode(this.forgotPasswordForm.value).subscribe(
      (response) => {
        console.log(response);
        this.message = 'Email Sent successfully! Please Check your inbox';
        this.emailSent = true;
        this.hideDialog();
        this.refreshForm();
      },
      (httpError) => {
        console.log(httpError);
        this.hideDialog();
        this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error'});
      }
    );
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
  refreshForm() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('')
    });
  }
  clearToast() {
    this.messageService.clear();
  }

}
