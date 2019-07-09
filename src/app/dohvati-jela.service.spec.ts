import { TestBed } from '@angular/core/testing';

import { DohvatiJelaService } from './dohvati-jela.service';

describe('DohvatiJelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DohvatiJelaService = TestBed.get(DohvatiJelaService);
    expect(service).toBeTruthy();
  });
});
