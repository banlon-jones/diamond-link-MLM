import { async, TestBed } from '@angular/core/testing';
import { AccountListingRowComponent } from './account-listing-row.component';
describe('AccountListingRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AccountListingRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AccountListingRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=account-listing-row.component.spec.js.map