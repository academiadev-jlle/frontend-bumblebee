import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://viacep.com.br/ws/';


@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) { }

  getCidadeAndUF(cep: string) {
    return this.http.get(API_URL + cep + '/json');
  }
}
