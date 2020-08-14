import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { categoriesUrl } from "../../services/app-http/backendUrlStrings";
import "rxjs-compat/add/operator/map";
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.addCategory = function (data) {
        return this.http.post(categoriesUrl.CREATE_CATEGORY, data);
    };
    CategoryService.prototype.getCategories = function () {
        return this.http.get(categoriesUrl.GET_CATEGORIES)
            .map(function (response) {
            var categories = response;
            return categories;
        });
    };
    CategoryService.prototype.updateCategory = function (category) {
        return this.http.post('/api/protected/business/product/category/' + category.id + '/update', category);
    };
    CategoryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
//# sourceMappingURL=category.service.js.map