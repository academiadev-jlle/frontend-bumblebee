import { TestBed, inject } from '@angular/core/testing';

import { ViacepService } from './viacep.service';

describe('ViacepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViacepService]
    });
  });

  it('should be created', inject([ViacepService], (service: ViacepService) => {
    expect(service).toBeTruthy();
  }));
});
