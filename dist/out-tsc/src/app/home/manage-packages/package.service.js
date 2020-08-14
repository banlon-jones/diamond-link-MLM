import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { packageUrl } from '../../services/app-http/backendUrlStrings';
import 'rxjs/add/operator/map';
var PackageService = /** @class */ (function () {
    function PackageService(http) {
        this.http = http;
    }
    PackageService.prototype.getPackage = function (id) {
    };
    PackageService.prototype.getAllPackages = function () {
        return this.http.get(packageUrl.GET_PACKAGES)
            .map(function (response) {
            var packages = response;
            return packages;
        });
    };
    PackageService.prototype.createPackage = function (pack) {
        console.log(pack);
        return this.http.post(packageUrl.CREATE_PACKAGE, pack);
    };
    PackageService.prototype.updatePackage = function (pack) {
        return this.http.post('/api/protected/business/packages/' + pack.id + '/update', pack);
    };
    PackageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PackageService);
    return PackageService;
}());
export { PackageService };
//# sourceMappingURL=package.service.js.map