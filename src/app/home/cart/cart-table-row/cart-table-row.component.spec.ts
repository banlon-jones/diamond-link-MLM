import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableRowComponent } from './cart-table-row.component';

describe('CartTableRowComponent', () => {
  let component: CartTableRowComponent;
  let fixture: ComponentFixture<CartTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
