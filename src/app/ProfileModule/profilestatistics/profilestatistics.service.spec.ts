import { TestBed, inject } from '@angular/core/testing';

import { ProfilestatisticsService } from './profilestatistics.service';

describe('ProfilestatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilestatisticsService]
    });
  });

  it('should be created', inject([ProfilestatisticsService], (service: ProfilestatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
