import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DownLinksService = /** @class */ (function () {
    function DownLinksService(http) {
        this.http = http;
        this.customerBaseUri = 'https://mungwincore-customer.herokuapp.com';
    }
    DownLinksService.prototype.getDownLines = function (linkToDownLines) {
        if (linkToDownLines) {
            return this.http.get(linkToDownLines);
        }
    };
    DownLinksService.prototype.getDirectDownLines = function () {
        return this.http.get(this.customerBaseUri + '/api/protected/customer/down_lines');
    };
    DownLinksService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DownLinksService);
    return DownLinksService;
}());
export { DownLinksService };
//# sourceMappingURL=down-links.service.js.map