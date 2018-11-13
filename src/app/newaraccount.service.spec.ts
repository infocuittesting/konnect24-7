import { TestBed, inject } from '@angular/core/testing';

import { NewaraccountService } from './newaraccount.service';

describe('NewaraccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewaraccountService]
    });
  });

  it('should be created', inject([NewaraccountService], (service: NewaraccountService) => {
    expect(service).toBeTruthy();
  }));
});
