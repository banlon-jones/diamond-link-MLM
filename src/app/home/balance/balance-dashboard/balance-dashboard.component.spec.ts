import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDashboardComponent } from './balance-dashboard.component';

describe('BalanceDashboardComponent', () => {
  let component: BalanceDashboardComponent;
  let fixture: ComponentFixture<BalanceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
