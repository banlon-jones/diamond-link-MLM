import { async, TestBed } from '@angular/core/testing';
import { VoucherMakerComponent } from './voucher-maker.component';
describe('VoucherMakerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VoucherMakerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VoucherMakerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=voucher-maker.component.spec.js.map