import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollapsibleLinkComponent } from './sidebar-collapsible-link.component';

describe('SidebarCollapsibleLinkComponent', () => {
  let component: SidebarCollapsibleLinkComponent;
  let fixture: ComponentFixture<SidebarCollapsibleLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCollapsibleLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCollapsibleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
