import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOrderRowComponent } from './payment-order-row.component';

describe('PaymentOrderRowComponent', () => {
  let component: PaymentOrderRowComponent;
  let fixture: ComponentFixture<PaymentOrderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentOrderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOrderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
