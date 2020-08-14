import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';
import { PaymentsService } from '../../payments/payments.service';
var VoucherMakerComponent = /** @class */ (function () {
    function VoucherMakerComponent(paymentService, messageService) {
        this.paymentService = paymentService;
        this.messageService = messageService;
        this.created = false;
        this.password = '';
        this.mdialog = false;
    }
    VoucherMakerComponent.prototype.ngOnInit = function () {
        this.hideMakerDialog();
        this.created = false;
        this.voucherForm = new FormGroup({
            amount: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    };
    VoucherMakerComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.voucherForm.invalid) {
            return;
        }
        else {
            this.paymentService.createVoucher({
                amount: this.voucherForm.get('amount').value,
                password: this.voucherForm.get('password').value
            }).subscribe(function (response) {
                console.log(response);
                _this.toastSingle({ message: 'Voucher Created Successfully. Use the Code to pay with PayCash!',
                    severity: 'success', summary: 'success' });
                _this.created = true;
                _this.voucherValue = response;
                _this.password = '';
            }, function (httpError) {
                console.log(httpError);
                _this.toastSingle({ message: 'Oops Sorry ' + httpError.error.message,
                    severity: 'error', summary: 'error' });
            });
        }
    };
    VoucherMakerComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    VoucherMakerComponent.prototype.createMakerAccount = function () {
        var _this = this;
        this.paymentService.createMakerAccount(this.password).subscribe(function (response) {
            _this.hideMakerDialog();
            console.log(response);
            _this.toastSingle({ message: 'Maker Account Created Successfully!',
                severity: 'success', summary: 'success' });
            _this.password = '';
        }, function (httpError) {
            _this.hideMakerDialog();
            console.log(httpError);
            _this.toastSingle({ message: 'Oops Sorry ' + httpError.error.message,
                severity: 'error', summary: 'error' });
        });
    };
    VoucherMakerComponent.prototype.showMakerDialog = function () {
        this.mdialog = true;
    };
    VoucherMakerComponent.prototype.hideMakerDialog = function () {
        this.mdialog = false;
    };
    VoucherMakerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-voucher-maker',
            templateUrl: './voucher-maker.component.html',
            styleUrls: ['./voucher-maker.component.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [PaymentsService, MessageService])
    ], VoucherMakerComponent);
    return VoucherMakerComponent;
}());
export { VoucherMakerComponent };
//# sourceMappingURL=voucher-maker.component.js.map