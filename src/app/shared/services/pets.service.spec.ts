import { TestBed, inject } from '@angular/core/testing';

import { PetsService } from './pets.service';
import { HttpClientModule } from '@angular/common/http';

describe('PetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PetsService], (service: PetsService) => {
    expect(service).toBeTruthy();
  }));
});
