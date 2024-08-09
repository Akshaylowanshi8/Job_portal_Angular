import { TestBed } from '@angular/core/testing';

import { JopPortalService } from './jop-portal.service';

describe('JopPortalService', () => {
  let service: JopPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JopPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
