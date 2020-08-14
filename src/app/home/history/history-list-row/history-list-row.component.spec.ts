import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryListRowComponent } from './history-list-row.component';

describe('HistoryListRowComponent', () => {
  let component: HistoryListRowComponent;
  let fixture: ComponentFixture<HistoryListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
