import { TestBed } from '@angular/core/testing';

import { ErrorBagService } from './error-bag.service';

describe('ErrorBagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorBagService = TestBed.get(ErrorBagService);
    expect(service).toBeTruthy();
  });
});
