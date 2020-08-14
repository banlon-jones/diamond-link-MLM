import { async, TestBed } from '@angular/core/testing';
import { PaymentOrderRowComponent } from './payment-order-row.component';
describe('PaymentOrderRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PaymentOrderRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PaymentOrderRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-order-row.component.spec.js.map