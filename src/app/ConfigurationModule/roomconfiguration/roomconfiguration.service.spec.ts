import { TestBed, inject } from '@angular/core/testing';

import { RoomconfigurationService } from './roomconfiguration.service';

describe('RoomconfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomconfigurationService]
    });
  });

  it('should be created', inject([RoomconfigurationService], (service: RoomconfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
