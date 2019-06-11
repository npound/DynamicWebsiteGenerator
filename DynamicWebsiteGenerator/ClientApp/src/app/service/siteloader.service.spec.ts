import { TestBed } from '@angular/core/testing';

import { SiteloaderService } from './siteloader.service';

describe('SiteloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteloaderService = TestBed.get(SiteloaderService);
    expect(service).toBeTruthy();
  });
});
