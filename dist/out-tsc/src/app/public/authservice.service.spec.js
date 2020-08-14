import { TestBed } from '@angular/core/testing';
import { AuthserviceService } from './authservice.service';
describe('AuthserviceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthserviceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authservice.service.spec.js.map