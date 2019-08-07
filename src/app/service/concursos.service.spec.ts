import { TestBed } from '@angular/core/testing';

import { ConcursosService } from './concursos.service';

describe('ConcursosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcursosService = TestBed.get(ConcursosService);
    expect(service).toBeTruthy();
  });
});
