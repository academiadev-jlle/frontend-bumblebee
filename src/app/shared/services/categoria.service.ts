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
      id: 0,
      descricao: 'Achados', // pessoa que achou um pet
      enum: 'ACHADOS'
    }, {
      id: 1,
      descricao: 'Devolvidos', // pessoa que achou um pet e devolveu
      enum: 'DEVOLVIDOS'
    }, {
      id: 2,
      descricao: 'Perdidos', // pessoa que perdeu seu pet
      enum: 'PERDIDOS'
    }, {
      id: 3,
      descricao: 'Encontrados', // pessoa que encontrou seu pet perdido
      enum: 'ENCONTRADOS'
    }, {
      id: 4,
      descricao: 'Para adoção', // pets para adoção
      enum: 'ADOCAO'
    }, {
      id: 5,
      descricao: 'Adotados', // pets já adotados
      enum: 'ADOTADOS'
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
