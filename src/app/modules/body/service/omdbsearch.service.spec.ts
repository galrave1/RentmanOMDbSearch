import { TestBed } from '@angular/core/testing';

import { OMDBSearchService } from './omdbsearch.service';

describe('OMDBSearchService', () => {
  let service: OMDBSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OMDBSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
