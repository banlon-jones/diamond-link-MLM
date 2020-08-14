import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListingRowComponent } from './account-listing-row.component';

describe('AccountListingRowComponent', () => {
  let component: AccountListingRowComponent;
  let fixture: ComponentFixture<AccountListingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountListingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
