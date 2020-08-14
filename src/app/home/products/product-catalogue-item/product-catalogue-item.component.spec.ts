import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogueItemComponent } from './product-catalogue-item.component';

describe('ProductCatalogueItemComponent', () => {
  let component: ProductCatalogueItemComponent;
  let fixture: ComponentFixture<ProductCatalogueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatalogueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
