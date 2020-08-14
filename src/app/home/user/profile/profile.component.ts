import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../../../public/authservice.service';
import {BASE_URI, IMAGE_BASE_URI} from '../../../services/app-http/backendUrlStrings';
import {MessageService} from 'primeng/api';
import {ErrorBagService} from '../../../services/errors/error-bag.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
})
export class ProfileComponent implements OnInit {

  profile;
  avatarForm;
  selectedFiles: FileList;
  progressBar = false;
  base_uri = BASE_URI;
  image_base_uri = IMAGE_BASE_URI;
  constructor(private authservice: AuthserviceService, private messageService: MessageService,
              private errorBag: ErrorBagService) { }

  ngOnInit() {
    this.avatarForm = new FormGroup({
      avatar: new FormControl('', Validators.required),
    });
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  onAvatarFormSubmit() {
    if (this.avatarForm.invalid) {
      return;
    } else {
      const file = this.selectedFiles.item(0);
      console.log(file);
      const formData = new FormData();
      formData.append('image', file);
      this.progressBar = true;
      this.authservice.upLoadProfilePic(formData).subscribe(
        (response) => {
          console.log(response);
          this.refreshProfile();
          this.progressBar = false;
          this.selectedFiles = null;
          this.toastSingle({message: 'Profile Picture Uploaded successfully!', severity: 'success', summary: 'success'});
        },
        (httpError) => {
          console.log(httpError);
          this.progressBar = false;
          this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error'});
        }
      );
    }
  }
  getProfile () {
    return JSON.parse(localStorage.getItem('customerDetails'));
  }
  refreshProfile() {
    this.authservice.getCustomerDetails().subscribe(
      (response) => {
        localStorage.removeItem('customerDetails');
        this.authservice.storeCustomerDetails(response);
      }
    );
  }
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
  clearToast() {
    this.messageService.clear();
  }
}
