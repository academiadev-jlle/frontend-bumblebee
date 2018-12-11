import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

@Injectable({
  providedIn: 'root'
})
export class DadosabertosbrCidadesService {

  constructor(private http: HttpClient) { }

  ufs = new Map()
    .set('RO', 11)
    .set('AC', 12)
    .set('AM', 13)
    .set('RR', 14)
    .set('PA', 15)
    .set('AP', 16)
    .set('TO', 17)
    .set('MA', 21)
    .set('PI', 22)
    .set('CE', 23)
    .set('RN', 24)
    .set('PB', 25)
    .set('PE', 26)
    .set('AL', 27)
    .set('SE', 28)
    .set('BA', 29)
    .set('MG', 31)
    .set('ES', 32)
    .set('RJ', 33)
    .set('SP', 35)
    .set('PR', 41)
    .set('SC', 42)
    .set('RS', 43)
    .set('MS', 50)
    .set('MT', 51)
    .set('GO', 52)
    .set('DF', 53);

  getId(uf: string) {
      return this.ufs.get(uf);
  }


  getCidades(uf) {
    const newUf = this.getId(uf);
    return this.http.get(API_URL + newUf + '/municipios/');
  }
}



