import { TestBed } from '@angular/core/testing';

import { BlzRfmJsonService } from './blz-rfm-json.service';

describe('BlzRfmJsonService', () => {
  let service: BlzRfmJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlzRfmJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
