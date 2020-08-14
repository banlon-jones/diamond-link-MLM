import { TestBed } from '@angular/core/testing';

import { CustomerGuardService } from './customer-guard.service';

describe('CustomerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerGuardService = TestBed.get(CustomerGuardService);
    expect(service).toBeTruthy();
  });
});
