import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PackageService } from './package.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
var ManagePackagesComponent = /** @class */ (function () {
    function ManagePackagesComponent(packageservice, modal, modalConfig) {
        this.packageservice = packageservice;
        this.modal = modal;
        this.modalConfig = modalConfig;
    }
    ManagePackagesComponent.prototype.ngOnInit = function () {
        //
        this.getPackages();
        // customize default values of modals used by this component tree
        this.modalConfig.backdrop = 'static';
        this.modalConfig.keyboard = false;
        // package creation form
        this.createPackageForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            registrationPoints: new FormControl('', Validators.required),
            qualificationPoints: new FormControl('', Validators.required),
            directReferralPercentage: new FormControl('', Validators.required)
        });
    };
    // display create package modal
    ManagePackagesComponent.prototype.open = function (content) {
        this.modal.open(content);
    };
    // display edit modal
    ManagePackagesComponent.prototype.openEditModel = function (editContent) {
        this.modal.open(editContent);
    };
    ManagePackagesComponent.prototype.getPackages = function () {
        var _this = this;
        this.packageservice.getAllPackages().subscribe(function (data) {
            console.log(data.data);
            _this.packages = data.data;
        }, function (error) {
            console.log(error);
        });
    };
    // create package
    ManagePackagesComponent.prototype.onCreate = function () {
        var _this = this;
        this.packageservice.createPackage(this.createPackageForm.value).subscribe(function (response) {
            console.log(response);
            _this.getPackages();
        }, function (error) {
            console.log(error);
        });
    };
    // Get package by Id
    ManagePackagesComponent.prototype.getPackage = function (id) {
        this.package = this.packages.find(function (pack) { return pack.id === id; });
        this.editPackageForm = new FormGroup({
            id: new FormControl(this.package.id, Validators.required),
            name: new FormControl(this.package.name, Validators.required),
            description: new FormControl(this.package.description, Validators.required),
            registrationPoints: new FormControl(this.package.registrationPoints, Validators.required),
            qualificationPoints: new FormControl(this.package.qualificationPoints, Validators.required),
            directReferralPercentage: new FormControl(this.package.directReferralPercentage, Validators.required)
        });
    };
    ManagePackagesComponent.prototype.updatePackage = function () {
        var _this = this;
        this.packageservice.updatePackage(this.editPackageForm.value).subscribe(function (response) {
            // success
            console.log(response);
            _this.getPackages();
        }, function (error) {
            console.log(error.message);
        });
    };
    ManagePackagesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manage-packages',
            templateUrl: './manage-packages.component.html',
            styleUrls: ['./manage-packages.component.scss'],
            // NgbModal, NgbModalConfig to component providers
            providers: [NgbModalConfig, NgbModal]
        }),
        tslib_1.__metadata("design:paramtypes", [PackageService,
            NgbModal,
            NgbModalConfig])
    ], ManagePackagesComponent);
    return ManagePackagesComponent;
}());
export { ManagePackagesComponent };
//# sourceMappingURL=manage-packages.component.js.map