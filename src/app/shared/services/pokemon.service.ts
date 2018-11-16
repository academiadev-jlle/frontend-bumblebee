import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonListOptions } from 'src/app/domain/pokemon-list.options';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    private url = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        private http: HttpClient
    ) {}

    get(): Observable<PokemonListOptions> {
        return this.http.get<PokemonListOptions>(this.url);
    }
}


