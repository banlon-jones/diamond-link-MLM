import { TestBed } from '@angular/core/testing';
import { ToastrService } from './toastr.service';
describe('ToastrService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ToastrService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=toastr.service.spec.js.map