import { PokemonListItemOptions } from './pokemon-list-item.options';

export interface PokemonListOptions {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonListItemOptions[];
}
