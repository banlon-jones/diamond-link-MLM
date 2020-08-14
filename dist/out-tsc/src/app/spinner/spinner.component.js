import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.message = '';
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SpinnerComponent.prototype, "message", void 0);
    SpinnerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-spinner',
            templateUrl: './spinner.component.html',
            styleUrls: ['./spinner.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
export { SpinnerComponent };
//# sourceMappingURL=spinner.component.js.map