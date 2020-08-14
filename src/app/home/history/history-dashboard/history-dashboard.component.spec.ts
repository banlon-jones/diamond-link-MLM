import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDashboardComponent } from './history-dashboard.component';

describe('HistoryDashboardComponent', () => {
  let component: HistoryDashboardComponent;
  let fixture: ComponentFixture<HistoryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
