import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

const API_URL = 'https://test-bumblebeepets.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

    createPet(nome: string, categoria: number, descricao: string,
      porte: number, especie: number, sexo: string,
      idFotos: Array<number>,
      cep: string, rua: string, referencia: string, bairro: string, cidade: string, uf: string) {

    const token = this.tokenService.getToken();
    return this.http.post(API_URL + '/pet', {
      categoria,
      descricao,
      especie,
      idFotos,
      localizacao: {
        bairro,
        cep,
        cidade,
        logradouro: rua,
        referencia,
        uf
      },
      nome,
      porte,
      sexo
    }, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
      observe: 'response'
    });
  }

  cadastraUsuario(email: string, nome: string, contato: number, senha: string) {
    return this.http.post(API_URL + '/usuario', { contato, email, nome, senha });
  }

  trocaFotoPorId(foto) {
    return this.http.post(API_URL + '/foto/', foto);
  }

  authenticate(email: string, senha: string) {
    const data = new FormData();
    data.append('username', email);
    data.append('password', senha);
    data.append('grant_type', 'password');

    return this.http.post(API_URL + '/oauth/token', data, {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('academiadev-front:fronfront')
      }),
      observe: 'response'
    })
      .pipe(tap(res => {
        const authToken = res['body']['access_token'];
        this.tokenService.setToken(authToken);
      }));
  }

  logout() {
    const token = this.tokenService.getToken();

    this.tokenService.removeToken();
    return this.http.get(API_URL + '/oauth/logout', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
      observe: 'response'
    });

  }
  getInfo() {
    const token = this.tokenService.getToken();

    return this.http.get(API_URL + '/oauth/info', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
      observe: 'response'
    });
  }

}
