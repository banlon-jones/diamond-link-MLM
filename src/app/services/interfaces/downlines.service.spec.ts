import { TestBed } from '@angular/core/testing';

import { DownlinesService } from './downlines.service';

describe('DownlinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownlinesService = TestBed.get(DownlinesService);
    expect(service).toBeTruthy();
  });
});
