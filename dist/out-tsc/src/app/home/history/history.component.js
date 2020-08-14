import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { historyService } from './history.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(historyservice, modal, modalConfig) {
        this.historyservice = historyservice;
        this.modal = modal;
        this.modalConfig = modalConfig;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        //
        this.historys = this.historyservice.getAllhistorys();
        // customize default values of modals used by this component tree
        this.modalConfig.backdrop = 'static';
        this.modalConfig.keyboard = false;
        // history creation form
        this.createhistoryForm = new FormGroup({
            name: new FormControl('', Validators.required),
            amount: new FormControl('', Validators.required),
            benefits: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });
    };
    HistoryComponent.prototype.open = function (content) {
        this.modal.open(content);
    };
    HistoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-history',
            templateUrl: './history.component.html',
            styleUrls: ['./history.component.scss'],
            // NgbModal, NgbModalConfig to component providers
            providers: [NgbModalConfig, NgbModal]
        }),
        tslib_1.__metadata("design:paramtypes", [historyService,
            NgbModal,
            NgbModalConfig])
    ], HistoryComponent);
    return HistoryComponent;
}());
export { HistoryComponent };
//# sourceMappingURL=history.component.js.map