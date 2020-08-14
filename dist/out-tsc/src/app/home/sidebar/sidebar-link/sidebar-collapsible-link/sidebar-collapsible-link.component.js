import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SidebarCollapsibleLinkComponent = /** @class */ (function () {
    function SidebarCollapsibleLinkComponent() {
    }
    SidebarCollapsibleLinkComponent.prototype.ngOnInit = function () {
        this.isCollapsed = true;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarCollapsibleLinkComponent.prototype, "collapsiblePermission", void 0);
    SidebarCollapsibleLinkComponent = tslib_1.__decorate([
        Component({
            selector: '[app-sidebar-collapsible-link]',
            templateUrl: './sidebar-collapsible-link.component.html',
            styleUrls: ['./sidebar-collapsible-link.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SidebarCollapsibleLinkComponent);
    return SidebarCollapsibleLinkComponent;
}());
export { SidebarCollapsibleLinkComponent };
//# sourceMappingURL=sidebar-collapsible-link.component.js.map