import { TestBed } from '@angular/core/testing';
import { PaymentsService } from './payments.service';
describe('PaymentsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PaymentsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=payments.service.spec.js.map