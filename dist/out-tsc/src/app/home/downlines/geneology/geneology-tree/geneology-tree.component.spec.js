import { async, TestBed } from '@angular/core/testing';
import { GeneologyTreeComponent } from './geneology-tree.component';
describe('GeneologyTreeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GeneologyTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GeneologyTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=geneology-tree.component.spec.js.map