import { TestBed } from '@angular/core/testing';

import { ColfondosserviceService } from './colfondosservice.service';

describe('ColfondosserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColfondosserviceService = TestBed.get(ColfondosserviceService);
    expect(service).toBeTruthy();
  });
});
