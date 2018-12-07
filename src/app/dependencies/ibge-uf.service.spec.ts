import { TestBed, inject } from '@angular/core/testing';

import { IbgeUFService } from './ibge-uf.service';

describe('IbgeUFService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IbgeUFService]
    });
  });

  it('should be created', inject([IbgeUFService], (service: IbgeUFService) => {
    expect(service).toBeTruthy();
  }));
});
