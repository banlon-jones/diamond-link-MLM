import { TestBed } from '@angular/core/testing';

import { historyService } from './history.service';

describe('historyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: historyService = TestBed.get(historyService);
    expect(service).toBeTruthy();
  });
});
