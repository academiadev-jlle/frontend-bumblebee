import { TestBed, inject } from '@angular/core/testing';

import { DadosabertosbrCidadesService } from './dadosabertosbr-cidades.service';
import { HttpClientModule } from '@angular/common/http';

describe('DadosabertosbrCidadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosabertosbrCidadesService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([DadosabertosbrCidadesService], (service: DadosabertosbrCidadesService) => {
    expect(service).toBeTruthy();
  }));
});
