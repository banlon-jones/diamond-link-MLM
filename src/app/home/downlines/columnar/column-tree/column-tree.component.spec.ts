import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTreeComponent } from './column-tree.component';

describe('ColumnTreeComponent', () => {
  let component: ColumnTreeComponent;
  let fixture: ComponentFixture<ColumnTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
