import { TestBed } from '@angular/core/testing';
import { AdminGuardService } from './admin-guard.service';
describe('AdminGuardService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AdminGuardService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=admin-guard.service.spec.js.map