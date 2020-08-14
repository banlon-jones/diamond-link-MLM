import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../public/authservice.service';
import { BASE_URI } from '../../../services/app-http/backendUrlStrings';
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../../services/errors/error-bag.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, messageService, errorBag) {
        this.authservice = authservice;
        this.messageService = messageService;
        this.errorBag = errorBag;
        this.progressBar = false;
        this.base_uri = BASE_URI;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.avatarForm = new FormGroup({
            avatar: new FormControl('', Validators.required),
        });
    };
    ProfileComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    ProfileComponent.prototype.onAvatarFormSubmit = function () {
        var _this = this;
        if (this.avatarForm.invalid) {
            return;
        }
        else {
            var file = this.selectedFiles.item(0);
            console.log(this.avatarForm.get('avatar').value);
            var formData = new FormData();
            formData.append('avatar', file);
            this.progressBar = true;
            this.authservice.upLoadProfilePic(formData).subscribe(function (response) {
                console.log(response);
                _this.refreshProfile();
                _this.progressBar = false;
                _this.selectedFiles = null;
                _this.toastSingle({ message: 'Profile Picture Uploaded successfully!', severity: 'success', summary: 'success' });
            }, function (httpError) {
                console.log(httpError);
                _this.progressBar = false;
                _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error' });
            });
        }
    };
    ProfileComponent.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('customerDetails'));
    };
    ProfileComponent.prototype.refreshProfile = function () {
        var _this = this;
        this.authservice.getCustomerDetails().subscribe(function (response) {
            localStorage.removeItem('customerDetails');
            _this.authservice.storeCustomerDetails(response);
        });
    };
    ProfileComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    ProfileComponent.prototype.clearToast = function () {
        this.messageService.clear();
    };
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss'],
            providers: [MessageService],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService, MessageService,
            ErrorBagService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map