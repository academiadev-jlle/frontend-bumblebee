import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';


@Injectable({
  providedIn: 'root'
})
export class IbgeUFService {

  constructor(private http: HttpClient) { }

  getUFs() {
    const ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE',
     'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA',
      'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR',
       'RS', 'SC', 'SE', 'SP', 'TO'];
    return ufs;
  }
}
