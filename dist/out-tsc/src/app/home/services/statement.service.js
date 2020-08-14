import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { statementUrls } from '../../services/app-http/backendUrlStrings';
var StatementService = /** @class */ (function () {
    function StatementService(http) {
        this.http = http;
    }
    StatementService.prototype.getAccountBalance = function () {
        return this.http.get(statementUrls.GET_ACCOUNT_BALANCE);
    };
    StatementService.prototype.getAccountListing = function (request) {
        return this.http.post(statementUrls.ACCOUNT_LISTING, request);
    };
    StatementService.prototype.getStatement = function (request) {
        return this.http.post(statementUrls.STATEMENT, request);
    };
    StatementService.prototype.getPaymentHistory = function () {
        return this.http.get(statementUrls.GET_PAYMENT_HISTORY);
    };
    StatementService.prototype.getBalance = function () {
        return this.http.get(statementUrls.GET_TRANSACTION_BALANCE);
    };
    StatementService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StatementService);
    return StatementService;
}());
export { StatementService };
//# sourceMappingURL=statement.service.js.map