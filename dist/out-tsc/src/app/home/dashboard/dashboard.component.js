import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { StatementService } from '../services/statement.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(statementService) {
        this.statementService = statementService;
        this.currentDate = Date.now();
        this.balance = {
            name: '',
            currentBalance: 0.0,
            availableBalance: 0.0
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.getTransactionBalance();
        this.getAccountBalances();
    };
    DashboardComponent.prototype.getAccountBalances = function () {
        var _this = this;
        this.statementService.getAccountBalance().subscribe(function (response) {
            console.log(response);
            _this.balance = response;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [StatementService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map