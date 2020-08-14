import { async, TestBed } from '@angular/core/testing';
import { ProductCatalogueItemComponent } from './product-catalogue-item.component';
describe('ProductCatalogueItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductCatalogueItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductCatalogueItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-catalogue-item.component.spec.js.map