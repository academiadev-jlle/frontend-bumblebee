import { inject, TestBed } from '@angular/core/testing';
import { IbgeUFService } from './ibge-uf.service';
import { HttpClientModule } from '@angular/common/http';


describe('IbgeUFService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IbgeUFService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([IbgeUFService], (service: IbgeUFService) => {
    expect(service).toBeTruthy();
  }));
});
