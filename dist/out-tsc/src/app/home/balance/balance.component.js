import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var BalanceComponent = /** @class */ (function () {
    function BalanceComponent() {
        var _this = this;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length > 1 ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.focus$ = new Subject();
        this.click$ = new Subject();
        this.focusSearch = function (text$) {
            return text$
                .debounceTime(200).distinctUntilChanged()
                .merge(_this.focus$)
                .merge(_this.click$.filter(function () { return !_this.instance.isPopupOpen(); }))
                .map(function (term) { return (term === '' ? states : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); });
        };
    }
    BalanceComponent.prototype.ngOnInit = function () {
        this.currentRate = 8;
    };
    tslib_1.__decorate([
        ViewChild('instance'),
        tslib_1.__metadata("design:type", NgbTypeahead)
    ], BalanceComponent.prototype, "instance", void 0);
    BalanceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forms',
            templateUrl: './balance.component.html',
            styleUrls: ['./balance.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BalanceComponent);
    return BalanceComponent;
}());
export { BalanceComponent };
//# sourceMappingURL=balance.component.js.map