import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var historyService = /** @class */ (function () {
    function historyService() {
        this.historys = [
            {
                order: 'Pack 1',
                description: ' Logitech Mouse ',
                price: 300,
                benefits: 'Wireless Mouse',
                sales: 25,
                company: 'Electronics',
                address: 'Buea'
            },
            {
                order: 'Pack 2',
                description: ' Bleu Necklace ',
                price: 20000,
                benefits: 'Beautiful armenia Blue necklace',
                sales: 25,
                company: 'Jewelry',
                address: 'Yaounde'
            },
            {
                order: 'Pack 1',
                description: ' LED TV ',
                price: 20000,
                benefits: 'High resolution Television',
                sales: 25,
                company: 'Electronics',
                address: 'Douala'
            }
        ];
    }
    historyService.prototype.gethistory = function (id) {
        return this.historys[id];
    };
    historyService.prototype.getAllhistorys = function () {
        return this.historys;
    };
    historyService.prototype.createhistory = function (order, description, amount, benefits, company, address) {
        this.historys.push({ order: order, description: description, price: amount, benefits: benefits, sales: 0, company: company, address: address });
    };
    historyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], historyService);
    return historyService;
}());
export { historyService };
//# sourceMappingURL=history.service.js.map