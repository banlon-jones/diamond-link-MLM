import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthserviceService } from '../../../public/authservice.service';
import {CustomerService} from '../../services/customer.service';
import {MessageService} from 'primeng/api';
import {ErrorBagService} from '../../../services/errors/error-bag.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [MessageService]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm;
  loading = false;
  constructor(private authservice: AuthserviceService, private customerService: CustomerService,
              private messageService: MessageService, private errorBag: ErrorBagService) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      oldPassword : new FormControl('', Validators.required),
      newPassword : new FormControl('', Validators.required),
      newPasswordConfirm : new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.loading = true;
    const passwordObj = this.changePasswordForm.value;
    this.customerService.changePassword(passwordObj).subscribe(
      (response) => {
        console.log(response);
        this.loading = false;
        this.toastSingle({message: 'Password changed successfully. Thank you!',
        severity: 'success', summary: 'success'});
        this.refreshForm();
      },
      (httpError) => {
        console.log(httpError);
        this.loading = false;
        this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError),
          severity: 'error', summary: 'error'});
      }
    );
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
                              toast.summary + ' Message', detail: toast.message});
  }
  refreshForm() {
    this.changePasswordForm = new FormGroup({
      oldPassword : new FormControl('', Validators.required),
      newPassword : new FormControl('', Validators.required),
      newPasswordConfirm : new FormControl('', Validators.required),
    });
  }
}
