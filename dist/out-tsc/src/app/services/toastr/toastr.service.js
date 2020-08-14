import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
var ToastrService = /** @class */ (function () {
    function ToastrService(messageService) {
        this.messageService = messageService;
    }
    ToastrService.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    ToastrService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService])
    ], ToastrService);
    return ToastrService;
}());
export { ToastrService };
//# sourceMappingURL=toastr.service.js.map