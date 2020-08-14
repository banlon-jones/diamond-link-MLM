import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePackagesComponent } from './manage-packages.component';

describe('ManagePackagesComponent', () => {
  let component: ManagePackagesComponent;
  let fixture: ComponentFixture<ManagePackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
