import { async, TestBed } from '@angular/core/testing';
import { SidebarLinkComponent } from './sidebar-link.component';
describe('SidebarLinkComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SidebarLinkComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SidebarLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-link.component.spec.js.map