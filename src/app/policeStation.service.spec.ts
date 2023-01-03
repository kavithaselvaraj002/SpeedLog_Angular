import { TestBed } from '@angular/core/testing';

import { PoliceStationService } from './policeStation.service';

describe('PoliceStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliceStationService = TestBed.get(PoliceStationService);
    expect(service).toBeTruthy();
  });
});
