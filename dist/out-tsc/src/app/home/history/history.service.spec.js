import { TestBed } from '@angular/core/testing';
import { historyService } from './history.service';
describe('historyService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(historyService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=history.service.spec.js.map