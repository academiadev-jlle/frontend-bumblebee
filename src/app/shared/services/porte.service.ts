import { Injectable } from '@angular/core';
import { PorteOptions } from '../options/porte.options';

@Injectable({
  providedIn: 'root'
})
export class PorteService {
  // private url = 'https://test-bumblebeepets.herokuapp.com/pet/portes/';

  portes: PorteOptions[] = [];

  constructor() {
    this.portes.push(...[{
      id: 0,
      descricao: 'Pequeno'
    }, {
      id: 1,
      descricao: 'Médio',
    }, {
      id: 2,
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
