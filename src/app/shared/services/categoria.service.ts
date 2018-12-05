import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaOptions } from '../options/categoria.options';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categorias: CategoriaOptions[] = [];

  constructor() {
    this.categorias.push(...[{
      id: 1,
      descricao: 'Perdidos'
    }, {
      id: 2,
      descricao: 'Para adoção',
    }, {
      id: 3,
      descricao: 'Adotados'
    }]);
  }

  getCategorias(): CategoriaOptions[] {
    return this.categorias;
  }

  // private url = 'https://test-bumblebeepets.herokuapp.com/pet/categorias/';

  // constructor(
  //   private http: HttpClient
  // ) { }

  // getCategorias(): Observable<CategoriaOptions[]> {
  //   return this.http.get<CategoriaOptions[]>(this.url);
  // }
}
