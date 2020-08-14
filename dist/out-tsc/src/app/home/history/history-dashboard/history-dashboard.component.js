import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StatementService } from '../../services/statement.service';
var HistoryDashboardComponent = /** @class */ (function () {
    function HistoryDashboardComponent(statementService) {
        this.statementService = statementService;
    }
    HistoryDashboardComponent.prototype.ngOnInit = function () {
        this.getPaymentHistories();
    };
    HistoryDashboardComponent.prototype.getPaymentHistories = function () {
        var _this = this;
        this.statementService.getPaymentHistory().subscribe(function (response) {
            console.log(response);
            _this.paymentHistoryAsReceiver = response.asReceiver;
            _this.paymentHistoryAsSender = response.asSender;
        }, function (error) {
            console.log(error);
        });
    };
    HistoryDashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-history-dashboard',
            templateUrl: './history-dashboard.component.html',
            styleUrls: ['./history-dashboard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StatementService])
    ], HistoryDashboardComponent);
    return HistoryDashboardComponent;
}());
export { HistoryDashboardComponent };
//# sourceMappingURL=history-dashboard.component.js.map