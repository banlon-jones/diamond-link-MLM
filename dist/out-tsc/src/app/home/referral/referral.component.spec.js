import { async, TestBed } from '@angular/core/testing';
import { ReferralComponenet } from './referral.component';
describe('ReferralComponenet', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReferralComponenet]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReferralComponenet);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=referral.component.spec.js.map