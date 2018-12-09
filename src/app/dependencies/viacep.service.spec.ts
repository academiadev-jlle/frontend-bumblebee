import { TestBed, inject } from '@angular/core/testing';

import { ViacepService } from './viacep.service';
import { HttpClientModule } from '@angular/common/http';
import { ViaCep } from '../shared/options/viacep.options';

describe('ViacepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViacepService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ViacepService], (service: ViacepService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the right address info from cep', inject([ViacepService], (service: ViacepService) => {
    service.getCidadeAndUF('89201050').subscribe(
      (resp: ViaCep) => {
        expect(resp.localidade).toBe('Joinville');
        expect(resp.bairro).toBe('Centro');
        expect(resp.logradouro).toBe('Rua Jerônimo Coelho');
        expect(resp.uf).toBe('SC');
      });

  }));
});
