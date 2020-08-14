import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ErrorBagService = /** @class */ (function () {
    function ErrorBagService() {
    }
    ErrorBagService.prototype.hasError = function (fieldName) {
        if (this.errors.length === 0) {
            return false;
        }
        for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
            var error = _a[_i];
            if (error.fieldName === fieldName) {
                return true;
            }
        }
    };
    ErrorBagService.prototype.getError = function (fieldName) {
        for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
            var error = _a[_i];
            if (error.fieldName === fieldName) {
                return error.message;
            }
        }
        return null;
    };
    ErrorBagService.prototype.setErrors = function (errors) {
        this.errors = errors;
        return true;
    };
    ErrorBagService.prototype.getHttpError = function (httpErrors) {
        var message = httpErrors.error.message;
        if (message === undefined) {
            message = 'Can\'t connect to Server';
        }
        else if (message === null) {
            message = 'Invalid Username or Password please try again. Thanks!';
        }
        else if (message.includes('MethodArgumentNotValidException')) {
            message = 'Invalid inputs';
        }
        return message;
    };
    ErrorBagService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ErrorBagService);
    return ErrorBagService;
}());
export { ErrorBagService };
//# sourceMappingURL=error-bag.service.js.map