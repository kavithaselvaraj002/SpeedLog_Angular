import { TestBed } from '@angular/core/testing';

import { PatrolService } from './patrol.service';

describe('PatrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatrolService = TestBed.get(PatrolService);
    expect(service).toBeTruthy();
  });
});
