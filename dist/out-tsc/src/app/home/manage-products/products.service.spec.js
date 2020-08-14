import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
describe('ProductsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProductsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=products.service.spec.js.map