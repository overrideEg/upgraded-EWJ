import { TestBed } from '@angular/core/testing';

import { UniRequestService } from './uni-request.service';

describe('UniRequestService', () => {
  let service: UniRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
