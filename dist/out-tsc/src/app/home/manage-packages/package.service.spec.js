import { TestBed } from '@angular/core/testing';
import { PackageService } from './package.service';
describe('PackageService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PackageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=package.service.spec.js.map