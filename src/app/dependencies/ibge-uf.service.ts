import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';


@Injectable({
  providedIn: 'root'
})
export class IbgeUFService {

  constructor(private http: HttpClient) { }

  getUFs() {
    return this.http.get(API_URL);
  }
}
