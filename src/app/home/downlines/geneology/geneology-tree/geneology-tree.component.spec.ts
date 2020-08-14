import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneologyTreeComponent } from './geneology-tree.component';

describe('GeneologyTreeComponent', () => {
  let component: GeneologyTreeComponent;
  let fixture: ComponentFixture<GeneologyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneologyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneologyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
