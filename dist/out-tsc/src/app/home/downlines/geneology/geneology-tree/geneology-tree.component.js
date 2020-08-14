import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { GeneologyTreeDataService } from '../geneology-tree-data.service';
import { AddNodeComponent } from '../add-node/add-node.component';
import { BASE_URI } from '../../../../services/app-http/backendUrlStrings';
var GeneologyTreeComponent = /** @class */ (function () {
    function GeneologyTreeComponent(dataTree) {
        this.dataTree = dataTree;
        this.loading = true;
        this.base_uri = BASE_URI;
    }
    GeneologyTreeComponent.prototype.ngOnInit = function () {
        this.generateData();
    };
    GeneologyTreeComponent.prototype.showDialog = function (data) {
        this.addNode.onInput(data);
        this.display = true;
    };
    GeneologyTreeComponent.prototype.refresh = function () {
        this.generateData();
        this.hideDialog();
    };
    GeneologyTreeComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    GeneologyTreeComponent.prototype.generateData = function () {
        var _this = this;
        this.dataTree.generateAdvancedData().subscribe(function (downTree) {
            _this.data = downTree;
            _this.loading = false;
            console.log(downTree);
        }, function (error) {
            console.log(error);
        });
    };
    tslib_1.__decorate([
        ViewChild(AddNodeComponent),
        tslib_1.__metadata("design:type", AddNodeComponent)
    ], GeneologyTreeComponent.prototype, "addNode", void 0);
    GeneologyTreeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-geneology-tree',
            templateUrl: './geneology-tree.component.html',
            styleUrls: ['./geneology-tree.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GeneologyTreeDataService])
    ], GeneologyTreeComponent);
    return GeneologyTreeComponent;
}());
export { GeneologyTreeComponent };
//# sourceMappingURL=geneology-tree.component.js.map