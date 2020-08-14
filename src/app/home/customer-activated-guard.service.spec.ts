import { TestBed } from '@angular/core/testing';

import { CustomerActivatedGuardService } from './customer-activated-guard.service';

describe('CustomerActivatedGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerActivatedGuardService = TestBed.get(CustomerActivatedGuardService);
    expect(service).toBeTruthy();
  });
});
