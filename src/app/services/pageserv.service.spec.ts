import { TestBed } from '@angular/core/testing';

import { PageservService } from './pageserv.service';

describe('PageservService', () => {
  let service: PageservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
