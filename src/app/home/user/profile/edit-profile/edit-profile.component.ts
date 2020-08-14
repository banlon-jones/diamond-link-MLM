import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthserviceService } from '../../../../public/authservice.service';
import {CustomerService} from '../../../services/customer.service';
import {MessageService} from 'primeng/api';
import {ErrorBagService} from '../../../../services/errors/error-bag.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [MessageService]
})
export class EditProfileComponent implements OnInit {
  editForm;
  loading = false;
  public countries: any;
  public profile;
  constructor(private authservice: AuthserviceService, private customerService: CustomerService,
              private messageService: MessageService, private errorBag: ErrorBagService) {  }

  ngOnInit() {
    this.loadProfile();
    this.customerService.getCustomerPermissionRoutes();
    console.log(this.profile);
    this.editForm = new FormGroup({
      phone : new FormControl(this.profile.phone, Validators.required),
      address: new FormControl(this.profile.address, Validators.required),
      city: new FormControl(this.profile.city, Validators.required),
      countryId: new FormControl(this.profile.countryId, Validators.required),
      birthDate: new FormControl(this.profile.birthDate, Validators.required),
      zipCode: new FormControl(this.profile.zipCode, Validators.required),
      idNumber: new FormControl(this.profile.idNumber, Validators.required),
      birthPlace: new FormControl(this.profile.birthPlace, Validators.required),
      nationality: new FormControl(this.profile.nationality, Validators.required),
      state: new FormControl(this.profile.state, Validators.required)
    });
    this.getCountries();
  }
  getCountries() {
    this.authservice.listOfCountries().subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.loading = true;
    const profile_info = this.editForm.value;
    this.customerService.updateProfile(profile_info).subscribe(
      (response) => {
        console.log(response);
        this.customerService.setCustomerDetails(response);
        this.loadProfile();
        this.loading = false;
        this.toastSingle({message: 'Profile updated Successfully!', severity: 'success', summary: 'success'});
      },
      (httpError) => {
        this.loading = false;
        console.log(httpError);
        this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error'});
      }
    );
  }
  loadProfile() {
    this.profile = this.customerService.loadCustomerDetails();
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  clearToast() {
    this.messageService.clear();
  }
}
