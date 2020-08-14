import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherMakerComponent } from './voucher-maker.component';

describe('VoucherMakerComponent', () => {
  let component: VoucherMakerComponent;
  let fixture: ComponentFixture<VoucherMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
