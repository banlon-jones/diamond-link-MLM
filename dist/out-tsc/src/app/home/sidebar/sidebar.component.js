import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthserviceService } from '../../public/authservice.service';
import { Router } from "@angular/router";
import { BASE_URI } from '../../services/app-http/backendUrlStrings';
import { CustomerService } from '../services/customer.service';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authservice, route, customerService) {
        this.authservice = authservice;
        this.route = route;
        this.customerService = customerService;
        this.samplePagesCollapsed = true;
        this.base_uri = BASE_URI;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isCollapsed = true;
        this.permissions = this.customerService.getCustomerPermissionRoutes();
        this.customerDetails = this.customerService.loadCustomerDetails();
        this.userActivation = this.customerDetails.activated;
    };
    SidebarComponent.prototype.refreshDetails = function () {
        console.log('refreshing details..');
        this.permissions = this.customerService.getCustomerPermissionRoutes();
        this.customerDetails = this.customerService.getCustomerPermissionRoutes();
    };
    SidebarComponent.prototype.getCustomerPermission = function () {
        return this.permissions;
    };
    SidebarComponent.prototype.getCustomerDetails = function () {
        return this.customerDetails;
    };
    SidebarComponent.prototype.logout = function () {
        this.authservice.signOut();
    };
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService,
            Router, CustomerService])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map