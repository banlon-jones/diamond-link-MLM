import { TestBed } from '@angular/core/testing';
import { DevBootstrapService } from './dev-bootstrap.service';
describe('DevBootstrapService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DevBootstrapService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=dev-bootstrap.service.spec.js.map