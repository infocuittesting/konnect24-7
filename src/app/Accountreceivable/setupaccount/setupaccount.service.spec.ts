import { TestBed, inject } from '@angular/core/testing';

import { SetupaccountService } from './setupaccount.service';

describe('SetupaccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetupaccountService]
    });
  });

  it('should be created', inject([SetupaccountService], (service: SetupaccountService) => {
    expect(service).toBeTruthy();
  }));
});
