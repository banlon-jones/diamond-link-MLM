import { async, TestBed } from '@angular/core/testing';
import { RegCartTableRowComponent } from './reg-cart-table-row.component';
describe('RegCartTableRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RegCartTableRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RegCartTableRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reg-cart-table-row.component.spec.js.map