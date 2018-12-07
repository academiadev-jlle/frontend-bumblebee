import { TestBed, inject } from '@angular/core/testing';

import { DadosabertosbrCidadesService } from './dadosabertosbr-cidades.service';

describe('DadosabertosbrCidadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosabertosbrCidadesService]
    });
  });

  it('should be created', inject([DadosabertosbrCidadesService], (service: DadosabertosbrCidadesService) => {
    expect(service).toBeTruthy();
  }));
});
