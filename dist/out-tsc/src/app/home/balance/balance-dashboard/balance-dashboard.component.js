import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StatementService } from '../../services/statement.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
var BalanceDashboardComponent = /** @class */ (function () {
    function BalanceDashboardComponent(statementService) {
        this.statementService = statementService;
        this.accountBalance = {
            name: '',
            currentBalance: 0.0,
            availableBalance: 0.0
        };
    }
    BalanceDashboardComponent.prototype.ngOnInit = function () {
        this.getAccountBalances();
        this.statementForm = new FormGroup({
            startDate: new FormControl('', Validators.required),
            period: new FormControl('', Validators.required),
            endDate: new FormControl(''),
            strict: new FormControl(''),
        });
        this.periods = [
            'Daily',
            'Monthly',
            'Yearly',
            'Any'
        ];
    };
    BalanceDashboardComponent.prototype.getAccountBalances = function () {
        var _this = this;
        this.statementService.getAccountBalance().subscribe(function (response) {
            console.log(response);
            _this.accountBalance = response;
        }, function (error) {
            console.log(error);
        });
    };
    BalanceDashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        var statementRequest = {
            startDate: this.statementForm.get('startDate').value,
            period: this.statementForm.get('period').value,
            endDate: this.statementForm.get('endDate').value,
            strict: this.statementForm.get('strict').value
        };
        console.log(statementRequest);
        this.statementService.getAccountListing(statementRequest).subscribe(function (response) {
            _this.listingRows = response.listingRows;
            _this.statement = response.statement;
            console.log(_this.listingRows);
            console.log(_this.statement);
        }, function (error) {
            console.log(error);
        });
    };
    BalanceDashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-balance-dashboard',
            templateUrl: './balance-dashboard.component.html',
            styleUrls: ['./balance-dashboard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StatementService])
    ], BalanceDashboardComponent);
    return BalanceDashboardComponent;
}());
export { BalanceDashboardComponent };
//# sourceMappingURL=balance-dashboard.component.js.map