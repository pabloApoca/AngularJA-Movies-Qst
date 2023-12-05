import { TestBed } from '@angular/core/testing';

import { ServiceMoviesService } from './service-movies.service';

describe('ServiceMoviesService', () => {
  let service: ServiceMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
