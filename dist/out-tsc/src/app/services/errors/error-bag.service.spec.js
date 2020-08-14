import { TestBed } from '@angular/core/testing';
import { ErrorBagService } from './error-bag.service';
describe('ErrorBagService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ErrorBagService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=error-bag.service.spec.js.map