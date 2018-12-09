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

  constructor(
    private http: HttpClient
  ) {
    this.especies.push(...[{
      id: 0,
      descricao: 'Ave'
    }, {
      id: 1,
      descricao: 'Cachorro',
    }, {
      id: 2,
      descricao: 'Gato'
    }]);
  }

  getEspecies(): EspecieOptions[] {
    return this.especies;
  }
}

//   getEspecies(): Observable<EspecieOptions[]> {
//     return this.http.get<EspecieOptions[]>(this.url);
//   }
