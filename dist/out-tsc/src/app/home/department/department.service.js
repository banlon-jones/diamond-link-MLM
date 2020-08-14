import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { departmentUrl } from "../../services/app-http/backendUrlStrings";
var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.createDepartment = function (data) {
        return this.http.post(departmentUrl.CREATE_DEPARTMENT, data);
    };
    DepartmentService.prototype.listDepartments = function () {
        return this.http.get(departmentUrl.GET_DEPARTMENT)
            .map(function (response) {
            return response;
        });
    };
    DepartmentService.prototype.updateDepartment = function (department) {
        return this.http.post('/api/protected/business/product/department/' + department.id + '/update', department);
    };
    DepartmentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DepartmentService);
    return DepartmentService;
}());
export { DepartmentService };
//# sourceMappingURL=department.service.js.map