import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customerUrls } from '../../services/app-http/backendUrlStrings';
import { permissions } from '../../services/app-http/frontendRouteDefinitions';
import { AuthserviceService } from '../../public/authservice.service';
var CustomerService = /** @class */ (function () {
    function CustomerService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    CustomerService.prototype.updateProfile = function (profile) {
        return this.http.post(customerUrls._PROFILE_UPDATE, profile);
    };
    CustomerService.prototype.changePassword = function (passwordObj) {
        return this.http.post(customerUrls._CHANGE_PASSWORD, passwordObj);
    };
    CustomerService.prototype.setCustomerDetails = function (details) {
        localStorage.setItem('customerDetails', JSON.stringify(details));
    };
    CustomerService.prototype.loadCustomerDetails = function () {
        return JSON.parse(this.authService.retrieveFromLocalStorage('customerDetails'));
    };
    CustomerService.prototype.getDetailsRefreshedState = function () {
        return this.authService.getDetialsState();
    };
    CustomerService.prototype.setDetailsRefeshedState = function (state) {
        this.authService.setDetailsState(state);
    };
    CustomerService.prototype.getCustomerPermissionRoutes = function () {
        var customerEncodedPermissions = this.loadCustomerDetails().permissions;
        var customerPermissionGroup = { collapsible: [], notCollapsible: [] };
        var collapseTo = [];
        var _loop_1 = function (cp) {
            // check if permission is registered in the frontend
            if (permissions.has(atob(cp.uri).toString())) {
                // check if permission is collapsible
                if (cp.collapsible) {
                    // check if permission.collapseTo is in collapseTo array
                    if (collapseTo.find(function (c) { return c === cp.collapseTo; }) !== undefined) {
                        console.log('found in collapseTo array');
                        var collapsiblePermission = customerPermissionGroup.collapsible.find(function (colP) { return colP.label === cp.collapseTo; });
                        if (collapsiblePermission !== undefined) {
                            collapsiblePermission.permissions.push({
                                id: cp.id, name: cp.name, uri: permissions.get(atob(cp.uri).toString()),
                                icon: cp.icon, collapsible: cp.collapsible, collapseTo: cp.collapseTo, displayed: cp.displayed
                            });
                        }
                    }
                    else {
                        // add it to collapseTo array
                        collapseTo.push(cp.collapseTo);
                        // create new CollapsiblePermission
                        var collapsiblePermission = {
                            label: cp.collapseTo,
                            type: 'dropdown',
                            icon: cp.icon,
                            collapsible: true,
                            permissions: [{
                                    id: cp.id, name: cp.name, uri: permissions.get(atob(cp.uri).toString()),
                                    icon: cp.icon, collapsible: cp.collapsible, collapseTo: cp.collapseTo, displayed: cp.displayed
                                }]
                        };
                        // add to permission group
                        customerPermissionGroup.collapsible.push(collapsiblePermission);
                    }
                }
                else {
                    customerPermissionGroup.notCollapsible.push({
                        id: cp.id, name: cp.name, uri: permissions.get(atob(cp.uri).toString()),
                        icon: cp.icon, collapsible: cp.collapsible, collapseTo: cp.collapseTo, displayed: cp.displayed
                    });
                }
            }
        };
        for (var _i = 0, customerEncodedPermissions_1 = customerEncodedPermissions; _i < customerEncodedPermissions_1.length; _i++) {
            var cp = customerEncodedPermissions_1[_i];
            _loop_1(cp);
        }
        console.log(customerPermissionGroup);
        console.log(collapseTo);
        this.authService.setDetailsState(false);
        return customerPermissionGroup;
    };
    CustomerService.prototype.getCustomerPermissionList = function () {
        var customerEncodedPermissions = this.loadCustomerDetails().permissions;
        var permissionList = [];
        for (var _i = 0, customerEncodedPermissions_2 = customerEncodedPermissions; _i < customerEncodedPermissions_2.length; _i++) {
            var cp = customerEncodedPermissions_2[_i];
            // check if permission is registered in the frontend
            if (permissions.has(atob(cp.uri).toString())) {
                // check if permission is collapsible
                permissionList.push((atob(cp.uri).toString()));
            }
        }
        return permissionList;
    };
    CustomerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthserviceService])
    ], CustomerService);
    return CustomerService;
}());
export { CustomerService };
//# sourceMappingURL=customer.service.js.map