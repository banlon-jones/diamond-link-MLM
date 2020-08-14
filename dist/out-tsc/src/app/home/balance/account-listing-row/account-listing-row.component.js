import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var AccountListingRowComponent = /** @class */ (function () {
    function AccountListingRowComponent() {
    }
    AccountListingRowComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AccountListingRowComponent.prototype, "listingRow", void 0);
    AccountListingRowComponent = tslib_1.__decorate([
        Component({
            selector: '[app-account-listing-row]',
            templateUrl: './account-listing-row.component.html',
            styleUrls: ['./account-listing-row.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AccountListingRowComponent);
    return AccountListingRowComponent;
}());
export { AccountListingRowComponent };
//# sourceMappingURL=account-listing-row.component.js.map