import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var HistoryListRowComponent = /** @class */ (function () {
    function HistoryListRowComponent() {
    }
    HistoryListRowComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], HistoryListRowComponent.prototype, "paymentHistoryRow", void 0);
    HistoryListRowComponent = tslib_1.__decorate([
        Component({
            selector: '[app-history-list-row]',
            templateUrl: './history-list-row.component.html',
            styleUrls: ['./history-list-row.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HistoryListRowComponent);
    return HistoryListRowComponent;
}());
export { HistoryListRowComponent };
//# sourceMappingURL=history-list-row.component.js.map