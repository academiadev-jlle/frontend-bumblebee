import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EspecieOptions } from '../options/especie.options';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {
  // private url = 'https://test-bumblebeepets.herokuapp.com/pet/especies/';

  especies: EspecieOptions[] = [];

  constructor() {
    this.especies.push(...[{
      id: 1,
      descricao: 'Ave'
    }, {
      id: 2,
      descricao: 'Cão',
    }, {
      id: 3,
      descricao: 'Gato'
    }]);
  }

  getEspecies(): EspecieOptions[] {
    return this.especies;
  }
}
