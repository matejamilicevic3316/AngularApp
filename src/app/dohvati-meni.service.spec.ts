import { TestBed } from '@angular/core/testing';

import { DohvatiMeniService } from './dohvati-meni.service';

describe('DohvatiMeniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DohvatiMeniService = TestBed.get(DohvatiMeniService);
    expect(service).toBeTruthy();
  });
});
