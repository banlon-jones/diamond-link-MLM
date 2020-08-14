import { TestBed } from '@angular/core/testing';
import { RegCartServiceService } from './reg-cart-service.service';
describe('RegCartServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RegCartServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=reg-cart-service.service.spec.js.map