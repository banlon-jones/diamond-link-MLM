import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneologyTreeDataService } from '../geneology-tree-data.service';
var AddNodeComponent = /** @class */ (function () {
    function AddNodeComponent(treeData) {
        this.treeData = treeData;
        this.upLineRegistrationCode = '';
        this.onAddNode = new EventEmitter();
        this.progressBar = false;
    }
    AddNodeComponent.prototype.ngOnInit = function () {
        this.addNodeForm = new FormGroup({
            customerId: new FormControl('')
        });
        this.getReferrals();
    };
    AddNodeComponent.prototype.onSubmit = function () {
        var _this = this;
        var referral_info = this.addNodeForm.value;
        this.progressBar = true;
        this.treeData.addDownLine(this.immediateUpLineId, referral_info.customerId, this.position).subscribe(function (response) {
            console.log(response);
            _this.getReferrals();
            _this.progressBar = false;
            _this.onAddNode.emit();
        }, function (error2) {
            console.log(error2);
            _this.progressBar = false;
            _this.onAddNode.emit();
        });
        console.log(referral_info);
    };
    AddNodeComponent.prototype.onInput = function (data) {
        this.upLineRegistrationCode = data.upLineRegistrationCode;
        this.position = data.position;
        this.immediateUpLineId = data.immediateUpLineId;
        console.log(data);
    };
    AddNodeComponent.prototype.getReferrals = function () {
        var _this = this;
        this.treeData.getReferrals().subscribe(function (data) {
            _this.referrals = data;
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AddNodeComponent.prototype, "upLineRegistrationCode", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], AddNodeComponent.prototype, "onAddNode", void 0);
    AddNodeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-node',
            templateUrl: './add-node.component.html',
            styleUrls: ['./add-node.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GeneologyTreeDataService])
    ], AddNodeComponent);
    return AddNodeComponent;
}());
export { AddNodeComponent };
//# sourceMappingURL=add-node.component.js.map