import { TestBed, inject } from '@angular/core/testing';

import { GeneralconfigurationService } from './generalconfiguration.service';

describe('GeneralconfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralconfigurationService]
    });
  });

  it('should be created', inject([GeneralconfigurationService], (service: GeneralconfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
