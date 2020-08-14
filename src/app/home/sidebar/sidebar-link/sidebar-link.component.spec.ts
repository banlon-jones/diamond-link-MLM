import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLinkComponent } from './sidebar-link.component';

describe('SidebarLinkComponent', () => {
  let component: SidebarLinkComponent;
  let fixture: ComponentFixture<SidebarLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
