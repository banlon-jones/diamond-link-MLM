import { TestBed } from '@angular/core/testing';
import { CurrencyService } from './currency.service';
describe('CurrencyService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CurrencyService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=currency.service.spec.js.map