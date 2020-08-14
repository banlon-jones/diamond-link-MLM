import { TestBed } from '@angular/core/testing';

import { DevBootstrapService } from './dev-bootstrap.service';

describe('DevBootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevBootstrapService = TestBed.get(DevBootstrapService);
    expect(service).toBeTruthy();
  });
});
