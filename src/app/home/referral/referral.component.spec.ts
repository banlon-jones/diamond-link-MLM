import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralComponenet } from './referral.component';

describe('ReferralComponenet', () => {
  let component: ReferralComponenet;
  let fixture: ComponentFixture<ReferralComponenet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralComponenet ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
