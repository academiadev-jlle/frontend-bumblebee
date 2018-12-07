import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://educacao.dadosabertosbr.com/api/cidades/';


@Injectable({
  providedIn: 'root'
})
export class DadosabertosbrCidadesService {

  constructor(private http: HttpClient) { }

  getCidades(uf) {
    return this.http.get(API_URL + uf);
  }
}



