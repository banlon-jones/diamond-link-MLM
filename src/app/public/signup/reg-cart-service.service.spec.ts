import { TestBed } from '@angular/core/testing';

import { RegCartServiceService } from './reg-cart-service.service';

describe('RegCartServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegCartServiceService = TestBed.get(RegCartServiceService);
    expect(service).toBeTruthy();
  });
});
