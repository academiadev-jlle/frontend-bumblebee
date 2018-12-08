import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PorteOptions } from '../options/porte.options';

@Injectable({
  providedIn: 'root'
})
export class PorteService {
  // private url = 'https://test-bumblebeepets.herokuapp.com/pet/portes/';

  portes: PorteOptions[] = [];

  constructor() {
    this.portes.push(...[{
      id: 1,
      descricao: 'Pequeno'
    }, {
      id: 2,
      descricao: 'Médio',
    }, {
      id: 3,
      descricao: 'Grande'
    }]);
  }

  getPortes(): PorteOptions[] {
    return this.portes;
  }
  // getPortes(): Observable<PorteOptions[]> {
  //   return this.http.get<PorteOptions[]>(this.url);
  // }
}
