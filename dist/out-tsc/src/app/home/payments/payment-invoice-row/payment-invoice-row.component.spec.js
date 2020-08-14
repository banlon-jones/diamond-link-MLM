import { async, TestBed } from '@angular/core/testing';
import { PaymentInvoiceRowComponent } from './payment-invoice-row.component';
describe('PaymentInvoiceRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PaymentInvoiceRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PaymentInvoiceRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-invoice-row.component.spec.js.map