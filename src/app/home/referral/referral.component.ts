import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {CustomerService} from '../services/customer.service';
interface EmailAddress {
  name: string;
  email: string;
}
@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss'],
  providers: [MessageService]
})
export class ReferralComponent implements OnInit {
  baseUrl;
  splitted;
  newUrl = '';
  profile;
  referralForm;
  viaMail = false;
  referralMailTo: Array<EmailAddress> = [];
  constructor(private messageService: MessageService, private customerService: CustomerService) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('customerDetails'));
    this.generateReferralLink();
    this.referralForm = new FormGroup({
      referralLink: new FormControl({value: this.newUrl, disabled: true}),
      referralName: new FormControl('', Validators.required),
      referralEmail: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  generateReferralLink() {
    // domain name
    this.baseUrl = window.location.href;
    // url
    this.splitted = this.baseUrl.split('/');
    // construct new url
    this.newUrl = this.splitted[0] + '//' + this.splitted[2] + '/' + 'signup' + '?registration_code=' + this.profile.registrationCode;
  }

  copyToClipBoard(item: any) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.toastSingle({message: 'Link copied to clipboard.', severity: 'success', summary: 'success'});
  }

  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  addMailAddress() {
    const address: EmailAddress = {
      name: this.referralForm.get('referralName').value,
      email: this.referralForm.get('referralEmail').value};
    // check if email address already exists
    if (this.referralMailTo.findIndex(f => f.email === address.email) < 0) {
      this.referralMailTo.push(address);
      this.toastSingle({message: 'Referral added', severity: 'success', summary: 'success'});
      this.referralForm = new FormGroup({
        referralLink: new FormControl({value: this.newUrl, disabled: true}),
        referralName: new FormControl('', Validators.required),
        referralEmail: new FormControl('', [Validators.email, Validators.required]),
      });
    }
  }
  removeMailAddress(address: EmailAddress) {
    const index = this.referralMailTo.findIndex(f => f.email === address.email);
    if (index > -1) {
      this.referralMailTo.splice(index, 1);
      this.toastSingle({message: 'Referral removed', severity: 'success', summary: 'success'});
    }
  }
  loadAddresses(): Array<EmailAddress> {
    return this.referralMailTo;
  }

  sendReferralMail() {
    this.customerService.sendReferralMails(
      this.referralMailTo, this.newUrl
    ).subscribe(
      response => {
        this.toastSingle({message: 'Link sent', severity: 'success', summary: 'success'});
        this.referralMailTo = [];
      },
      httpError => {
        console.log(httpError);
        this.toastSingle({message: 'Send Failed.', severity: 'error', summary: 'error'});
      }
    );
  }
  hasMail(): boolean {
    return this.referralMailTo.length > 0;
  }
}
