import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
var ReferralComponent = /** @class */ (function () {
    function ReferralComponent() {
    }
    ReferralComponent.prototype.ngOnInit = function () {
        this.profile = JSON.parse(localStorage.getItem('customerDetails'));
        this.generateReferralLink();
        this.referralForm = new FormGroup({
            referralLink: new FormControl(this.newUrl),
        });
    };
    ReferralComponent.prototype.generateReferralLink = function () {
        // domain name
        this.baseUrl = window.location.href;
        // url
        this.splitted = this.baseUrl.split('/');
        // construct new url
        this.newUrl = this.splitted[0] + '//' + this.splitted[2] + '/' + 'signup' + '/' + this.profile.registrationCode;
    };
    ReferralComponent = tslib_1.__decorate([
        Component({
            selector: 'app-referral',
            templateUrl: './referral.component.html',
            styleUrls: ['./referral.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ReferralComponent);
    return ReferralComponent;
}());
export { ReferralComponent };
//# sourceMappingURL=referral.component.js.map
