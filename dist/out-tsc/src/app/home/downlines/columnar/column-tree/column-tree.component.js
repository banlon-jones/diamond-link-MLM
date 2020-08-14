import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DownLinksService } from '../../data/down-links.service';
import { DevBootstrapService } from '../../data/dev-bootstrap.service';
var ColumnTreeComponent = /** @class */ (function () {
    function ColumnTreeComponent(downLinks, bootstrap) {
        this.downLinks = downLinks;
        this.bootstrap = bootstrap;
    }
    ColumnTreeComponent.prototype.init = function () {
        //  return this.downLinks.getDirectDownLines().subscribe(branch => branch = this.branch);
        this.branch = this.bootstrap.generate(7);
        console.log(this.branch);
    };
    ColumnTreeComponent.prototype.load = function (linkToDownLines) {
        if (linkToDownLines) {
            //  return this.downLinks.getDownLines(linkToDownLines).subscribe(branch => branch = this.branch);
            this.branch = this.bootstrap.generate(4);
        }
    };
    ColumnTreeComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ColumnTreeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-column-tree',
            templateUrl: './column-tree.component.html',
            styleUrls: ['./column-tree.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DownLinksService, DevBootstrapService])
    ], ColumnTreeComponent);
    return ColumnTreeComponent;
}());
export { ColumnTreeComponent };
//# sourceMappingURL=column-tree.component.js.map