import { TestBed, inject } from '@angular/core/testing';

import { AccountmaintenanceService } from './accountmaintenance.service';

describe('AccountmaintenanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountmaintenanceService]
    });
  });

  it('should be created', inject([AccountmaintenanceService], (service: AccountmaintenanceService) => {
    expect(service).toBeTruthy();
  }));
});
