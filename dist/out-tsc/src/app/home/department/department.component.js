import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(modal, modalConfig, departmentService) {
        this.modal = modal;
        this.modalConfig = modalConfig;
        this.departmentService = departmentService;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.modalConfig.backdrop = 'static';
        this.modalConfig.keyboard = false;
        this.getDepartments();
        this.createDepForm = new FormGroup({
            name: new FormControl('', Validators.required),
            status: new FormControl(true, Validators.required)
        });
    };
    DepartmentComponent.prototype.open = function (content) {
        this.modal.open(content);
    };
    DepartmentComponent.prototype.openEditModel = function (editContent) {
        this.modal.open(editContent);
    };
    DepartmentComponent.prototype.getDepartments = function () {
        var _this = this;
        return this.departmentService.listDepartments().subscribe(function (response) {
            _this.departments = response.data;
        }, function (error) {
            console.log(error.message);
        });
    };
    DepartmentComponent.prototype.getDepartment = function (id) {
        this.department = this.departments.find(function (department) { return department.id === id; });
        this.editDepartmentForm = new FormGroup({
            id: new FormControl(this.department.id, Validators.required),
            name: new FormControl(this.department.name, Validators.required),
        });
    };
    DepartmentComponent.prototype.updateDepartment = function () {
        var _this = this;
        this.departmentService.updateDepartment(this.editDepartmentForm.value).subscribe(function (response) {
            // success
            _this.getDepartments();
        }, function (error) {
            console.log(error.message);
        });
    };
    DepartmentComponent.prototype.addDepartment = function () {
        var _this = this;
        this.departmentService.createDepartment(this.createDepForm.value).subscribe(function (response) {
            // success
            _this.getDepartments();
        }, function (error) {
            console.log(error.message);
        });
    };
    DepartmentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-department',
            templateUrl: './department.component.html',
            styleUrls: ['./department.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal,
            NgbModalConfig,
            DepartmentService])
    ], DepartmentComponent);
    return DepartmentComponent;
}());
export { DepartmentComponent };
//# sourceMappingURL=department.component.js.map