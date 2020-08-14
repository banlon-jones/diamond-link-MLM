import { TestBed } from '@angular/core/testing';

import { GeneologyTreeDataService } from './geneology-tree-data.service';

describe('GeneologyTreeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneologyTreeDataService = TestBed.get(GeneologyTreeDataService);
    expect(service).toBeTruthy();
  });
});
