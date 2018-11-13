import { TestBed, inject } from '@angular/core/testing';

import { AccountoptionsService } from './accountoptions.service';

describe('AccountoptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountoptionsService]
    });
  });

  it('should be created', inject([AccountoptionsService], (service: AccountoptionsService) => {
    expect(service).toBeTruthy();
  }));
});
