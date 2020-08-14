import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCartTableRowComponent } from './reg-cart-table-row.component';

describe('RegCartTableRowComponent', () => {
  let component: RegCartTableRowComponent;
  let fixture: ComponentFixture<RegCartTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCartTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCartTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
