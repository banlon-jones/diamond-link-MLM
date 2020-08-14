import { TestBed, inject } from '@angular/core/testing';
import { PermissionGuard } from './permission.guard';
describe('PermissionGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PermissionGuard]
        });
    });
    it('should ...', inject([PermissionGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=permission.guard.spec.js.map