import { TestBed } from '@angular/core/testing';

import { IonicDesyService } from './ionic-desy.service';

describe('IonicDesyService', () => {
  let service: IonicDesyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicDesyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
