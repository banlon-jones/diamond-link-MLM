import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCartTableComponent } from './reg-cart-table.component';

describe('RegCartTableComponent', () => {
  let component: RegCartTableComponent;
  let fixture: ComponentFixture<RegCartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
