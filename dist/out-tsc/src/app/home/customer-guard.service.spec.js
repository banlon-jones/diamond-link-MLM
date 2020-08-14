import { TestBed } from '@angular/core/testing';
import { CustomerGuardService } from './customer-guard.service';
describe('CustomerGuardService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomerGuardService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer-guard.service.spec.js.map