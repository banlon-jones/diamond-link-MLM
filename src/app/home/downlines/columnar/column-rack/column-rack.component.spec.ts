import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRackComponent } from './column-rack.component';

describe('ColumnRackComponent', () => {
  let component: ColumnRackComponent;
  let fixture: ComponentFixture<ColumnRackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnRackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
