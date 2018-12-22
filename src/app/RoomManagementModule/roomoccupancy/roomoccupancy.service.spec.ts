import { TestBed, inject } from '@angular/core/testing';

import { RoomoccupancyService } from './roomoccupancy.service';

describe('RoomoccupancyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomoccupancyService]
    });
  });

  it('should be created', inject([RoomoccupancyService], (service: RoomoccupancyService) => {
    expect(service).toBeTruthy();
  }));
});
