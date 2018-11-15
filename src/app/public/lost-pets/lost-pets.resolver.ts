import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonListOptions } from '../../domain/pokemon-list.options';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Injectable()
export class LostPetsResolver implements Resolve<Observable<PokemonListOptions>> {
    constructor(private pokemon: PokemonService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonListOptions> {
        // const id = route.params.id;
        return this.pokemon.get();
    }
}

