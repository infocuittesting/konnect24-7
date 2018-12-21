import { TestBed, inject } from '@angular/core/testing';

import { EndofdayService } from './endofday.service';

describe('EndofdayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndofdayService]
    });
  });

  it('should be created', inject([EndofdayService], (service: EndofdayService) => {
    expect(service).toBeTruthy();
  }));
});
