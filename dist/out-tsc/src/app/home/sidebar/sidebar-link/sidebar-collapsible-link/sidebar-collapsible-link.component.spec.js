import { async, TestBed } from '@angular/core/testing';
import { SidebarCollapsibleLinkComponent } from './sidebar-collapsible-link.component';
describe('SidebarCollapsibleLinkComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SidebarCollapsibleLinkComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SidebarCollapsibleLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-collapsible-link.component.spec.js.map