import { TestBed } from '@angular/core/testing';

import { DownLinksService } from './down-links.service';

describe('DownLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownLinksService = TestBed.get(DownLinksService);
    expect(service).toBeTruthy();
  });
});
