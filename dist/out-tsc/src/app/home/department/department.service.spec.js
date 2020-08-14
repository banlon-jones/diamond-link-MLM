import { TestBed } from '@angular/core/testing';
import { DepartmentService } from './department.service';
describe('DepartmentService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DepartmentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=department.service.spec.js.map