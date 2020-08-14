import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SidebarLinkComponent = /** @class */ (function () {
    function SidebarLinkComponent() {
    }
    SidebarLinkComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarLinkComponent.prototype, "permission", void 0);
    SidebarLinkComponent = tslib_1.__decorate([
        Component({
            selector: '[app-sidebar-link]',
            templateUrl: './sidebar-link.component.html',
            styleUrls: ['./sidebar-link.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SidebarLinkComponent);
    return SidebarLinkComponent;
}());
export { SidebarLinkComponent };
//# sourceMappingURL=sidebar-link.component.js.map