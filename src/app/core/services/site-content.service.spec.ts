import { TestBed } from '@angular/core/testing';

import { SiteContentService } from './site-content.service';

describe('SiteContentService', () => {
  let service: SiteContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
