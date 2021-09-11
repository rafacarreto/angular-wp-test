import { TestBed } from '@angular/core/testing';

import { WpAPIService } from './wp-api.service';

describe('WpAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpAPIService = TestBed.get(WpAPIService);
    expect(service).toBeTruthy();
  });
});
