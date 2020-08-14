import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var DevBootstrapService = /** @class */ (function () {
    function DevBootstrapService() {
        this.customerDetails = {
            address: 'Malingo',
            gender: 'Male',
            email: 'paul@dlc.com',
            phone: '678945621',
            firstName: 'John',
            lastName: 'Paul',
            city: 'Buea',
            state: 'SW',
            nationality: 'Cameroonian',
            country: {
                id: 1,
                name: 'Cameroon'
            },
            countryId: 237,
            birthDate: new Date('1990-27-02'),
            registrationCode: 'CM00123',
            zipCode: '237'
        };
    }
    DevBootstrapService.prototype.generate = function (downLinesCount) {
        this.branch = {
            customerDetails: this.customerDetails,
            downlines: this.getDownLines(downLinesCount)
        };
        return this.branch;
    };
    DevBootstrapService.prototype.getDownLines = function (count) {
        // tslint:disable-next-line: prefer-const
        var downLines = new Array(count);
        for (var i = 1; i <= count; i++) {
            downLines[i - 1] = {
                downLineDetails: {
                    address: i % 2 ? 'Malingo' : 'Bonduma',
                    gender: i % 2 ? 'Male' : 'Female',
                    email: 'paul' + i + '@dlc.com',
                    phone: '6785621' + i,
                    firstName: i % 2 ? 'John' : 'Andrew',
                    lastName: i % 3 ? 'Paul' : 'Collins',
                    city: i % 2 ? 'Buea' : 'Douala',
                    state: i % 2 ? 'SW' : 'LT',
                    nationality: 'Cameroonian',
                    country: {
                        id: 1,
                        name: 'Cameroon'
                    },
                    countryId: 273,
                    birthDate: new Date('1990-27-02'),
                    registrationCode: 'CM0012' + i,
                    zipCode: '237'
                },
                downLink: {
                    linkToDownLines: '/api/customer/' + i + '/down_lines'
                }
            };
        }
        return downLines;
    };
    DevBootstrapService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DevBootstrapService);
    return DevBootstrapService;
}());
export { DevBootstrapService };
//# sourceMappingURL=dev-bootstrap.service.js.map