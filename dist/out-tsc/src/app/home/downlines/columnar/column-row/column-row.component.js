import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DevBootstrapService } from '../../data/dev-bootstrap.service';
var ColumnRowComponent = /** @class */ (function () {
    function ColumnRowComponent(bootstrap) {
        this.bootstrap = bootstrap;
    }
    ColumnRowComponent.prototype.ngOnInit = function () {
        this.isSet = false;
    };
    ColumnRowComponent.prototype.displayDownLines = function (linkToDownLines) {
        if (linkToDownLines) {
            //  return this.downLinks.getDownLines(linkToDownLines).subscribe(branch => branch = this.branch);
            this.downlines = this.bootstrap.generate(4).downlines;
        }
        this.isSet = this.isSet !== true;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnRowComponent.prototype, "downlines", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnRowComponent.prototype, "downline", void 0);
    ColumnRowComponent = tslib_1.__decorate([
        Component({
            selector: '[app-column-row]',
            templateUrl: './column-row.component.html',
            styleUrls: ['./column-row.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DevBootstrapService])
    ], ColumnRowComponent);
    return ColumnRowComponent;
}());
export { ColumnRowComponent };
//# sourceMappingURL=column-row.component.js.map