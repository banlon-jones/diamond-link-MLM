import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehistorysComponent } from './history.component';

describe('ManagehistorysComponent', () => {
  let component: ManagehistorysComponent;
  let fixture: ComponentFixture<ManagehistorysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehistorysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehistorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
