import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://test-bumblebeepets.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createPet(nome: string, categoria: string, descricao: string, porte: string, especie: string, imagem: File) {
    console.log({ nome, categoria, descricao, porte, especie, imagem });
    //  return this.http.post(API_URL + '/pet', {nome, categoria, descricao, porte, especie, imagem })
  }

  cadastraUsuario(email: string, nome: string, contato: string, senha: string) {
    return this.http.post(API_URL + '/usuario', {contato, email, nome, senha});
  }

  authenticate(email: string, senha: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('academiadev-front:fronfront')
      })
    };

    const data = new FormData();
    data.append('username', email);
    data.append('password', senha);
    data.append('grant_type', 'password');

    return this.http.post(API_URL + '/oauth/token', data, httpOptions);
  }

}
