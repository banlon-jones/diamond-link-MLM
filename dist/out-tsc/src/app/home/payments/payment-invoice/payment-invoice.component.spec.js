import { async, TestBed } from '@angular/core/testing';
import { PaymentInvoiceComponent } from './payment-invoice.component';
describe('PaymentInvoiceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PaymentInvoiceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PaymentInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-invoice.component.spec.js.map