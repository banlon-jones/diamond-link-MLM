import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../../public/authservice.service';
import { CustomerService } from '../../../services/customer.service';
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../../../services/errors/error-bag.service';
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(authservice, customerService, messageService, errorBag) {
        this.authservice = authservice;
        this.customerService = customerService;
        this.messageService = messageService;
        this.errorBag = errorBag;
        this.loading = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
        this.customerService.getCustomerPermissionRoutes();
        console.log(this.profile);
        this.editForm = new FormGroup({
            phone: new FormControl(this.profile.phone, Validators.required),
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
    };
    EditProfileComponent.prototype.getCountries = function () {
        var _this = this;
        this.authservice.listOfCountries().subscribe(function (data) {
            _this.countries = data;
        }, function (error) { return console.log(error); });
    };
    EditProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var profile_info = this.editForm.value;
        this.customerService.updateProfile(profile_info).subscribe(function (response) {
            console.log(response);
            _this.customerService.setCustomerDetails(response);
            _this.loadProfile();
            _this.loading = false;
            _this.toastSingle({ message: 'Profile updated Successfully!', severity: 'success', summary: 'success' });
        }, function (httpError) {
            _this.loading = false;
            console.log(httpError);
            _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error' });
        });
    };
    EditProfileComponent.prototype.loadProfile = function () {
        this.profile = this.customerService.loadCustomerDetails();
    };
    EditProfileComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    EditProfileComponent.prototype.clearToast = function () {
        this.messageService.clear();
    };
    EditProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService, CustomerService,
            MessageService, ErrorBagService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
export { EditProfileComponent };
//# sourceMappingURL=edit-profile.component.js.map