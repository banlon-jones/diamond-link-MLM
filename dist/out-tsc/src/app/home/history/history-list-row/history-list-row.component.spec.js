import { async, TestBed } from '@angular/core/testing';
import { HistoryListRowComponent } from './history-list-row.component';
describe('HistoryListRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HistoryListRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HistoryListRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=history-list-row.component.spec.js.map