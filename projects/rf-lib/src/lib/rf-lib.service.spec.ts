import { TestBed } from '@angular/core/testing';

import { RfLibService } from './rf-lib.service';

describe('RfLibService', () => {
  let service: RfLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RfLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
