import { TestBed } from '@angular/core/testing';
import { CustomerActivatedGuardService } from './customer-activated-guard.service';
describe('CustomerActivatedGuardService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomerActivatedGuardService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer-activated-guard.service.spec.js.map