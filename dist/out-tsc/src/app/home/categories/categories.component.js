import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from "./category.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DepartmentService } from "../department/department.service";
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, modal, modalConfig, departmentService) {
        this.categoryService = categoryService;
        this.modal = modal;
        this.modalConfig = modalConfig;
        this.departmentService = departmentService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
        // customize default values of modals used by this component tree
        this.modalConfig.backdrop = 'static';
        this.modalConfig.keyboard = false;
        this.getCategories();
        //
        this.getDepartments();
        this.addCategoryForm = new FormGroup({
            name: new FormControl('', Validators.required),
            departmentId: new FormControl('', Validators.required),
            status: new FormControl(true, Validators.required),
        });
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.categories = categories.data;
        }, function (error) {
            console.log(error);
        });
    };
    CategoriesComponent.prototype.getDepartments = function () {
        var _this = this;
        return this.departmentService.listDepartments().subscribe(function (response) {
            _this.departments = response.data;
        });
    };
    CategoriesComponent.prototype.open = function (content) {
        this.modal.open(content);
    };
    CategoriesComponent.prototype.openEditModel = function (editContent) {
        this.modal.open(editContent);
    };
    CategoriesComponent.prototype.addCategory = function () {
        var _this = this;
        this.categoryService.addCategory(this.addCategoryForm.value).subscribe(function (response) {
            _this.getCategories();
        });
    };
    //
    CategoriesComponent.prototype.getCategory = function (id) {
        this.category = this.categories.find(function (category) { return category.id === id; });
        this.editCategoryForm = new FormGroup({
            id: new FormControl(this.category.id, Validators.required),
            name: new FormControl(this.category.name, Validators.required),
            departmentId: new FormControl(this.category.department.id, Validators.required)
        });
        //console.log(this.category);
    };
    CategoriesComponent.prototype.updateCategory = function () {
        var _this = this;
        this.categoryService.updateCategory(this.editCategoryForm.value).subscribe(function (response) {
            // success
            _this.getCategories();
        });
    };
    CategoriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CategoryService,
            NgbModal,
            NgbModalConfig,
            DepartmentService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
export { CategoriesComponent };
//# sourceMappingURL=categories.component.js.map