import { TestBed } from '@angular/core/testing';

import { DohvatiPonuduService } from './dohvati-ponudu.service';

describe('DohvatiPonuduService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DohvatiPonuduService = TestBed.get(DohvatiPonuduService);
    expect(service).toBeTruthy();
  });
});
