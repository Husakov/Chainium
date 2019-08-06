import { TestBed } from '@angular/core/testing';

import { AddUrlService } from './add-url.service';

describe('AddUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddUrlService = TestBed.get(AddUrlService);
    expect(service).toBeTruthy();
  });
});
