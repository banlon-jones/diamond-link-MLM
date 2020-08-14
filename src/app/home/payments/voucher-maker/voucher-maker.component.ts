import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from 'primeng/api';
import {PaymentsService} from '../../payments/payments.service';

@Component({
  selector: 'app-voucher-maker',
  templateUrl: './voucher-maker.component.html',
  styleUrls: ['./voucher-maker.component.scss'],
  providers: [MessageService]
})
export class VoucherMakerComponent implements OnInit {
voucherForm: any;
created = false;
voucherValue: {amount: number, code: string};
password = '';
mdialog = false;
  constructor(private paymentService: PaymentsService, private messageService: MessageService) { }

  ngOnInit() {
    this.hideMakerDialog();
    this.created = false;
    this.voucherForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.voucherForm.invalid) {
      return;
    } else {
      this.paymentService.createVoucher({
        amount: this.voucherForm.get('amount').value,
        password: this.voucherForm.get('password').value
      }).subscribe(
        (response: any) => {
          console.log(response);
          this.toastSingle({message: 'Voucher Created Successfully. Use the Code to pay with PayCash!',
            severity: 'success', summary: 'success'});
          this.created = true;
          this.voucherValue = response;
          this.password = '';
        },
        (httpError) => {
          console.log(httpError);
          this.toastSingle({message: 'Oops Sorry ' + httpError.error.message,
            severity: 'error', summary: 'error'});
        }
      );
    }
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  createMakerAccount() {
    this.paymentService.createMakerAccount(this.password).subscribe(
      (response: any) => {
        this.hideMakerDialog();
        console.log(response);
        this.toastSingle({message: 'Maker Account Created Successfully!',
          severity: 'success', summary: 'success'});
        this.password = '';
      },
      (httpError) => {
        this.hideMakerDialog();
        console.log(httpError);
        this.toastSingle({message: 'Oops Sorry ' + httpError.error.message,
          severity: 'error', summary: 'error'});
      }
    );
  }
  showMakerDialog() {
    this.mdialog = true;
  }
  hideMakerDialog() {
    this.mdialog = false;
  }

}
