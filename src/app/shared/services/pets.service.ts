import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetOptions } from '../options/pet-list-item.options';
import { UserService } from 'src/app/core/user.service';

@Injectable({
    providedIn: 'root'
})
export class PetsService {
    private url = 'https://test-bumblebeepets.herokuapp.com/pet/';
    id_usuario: number;
    pets: PetOptions[] = [];

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {
        this.pets.push(...[{
            id: 1,
            nome: 'Diguinho',
            descricao: 'Fofo, pequenininho, quase não late, tá sempre abanando o rabo, e tem medo da rua.',
            categoria: 'PERDIDOS',
            especie: 'CAO',
            dataCadastro: '01/01/2018'
        },
        {
            id: 2,
            nome: 'Dunga',
            descricao: 'Grandão, pelos claros cor creme, muit dócil e simpático.',
            categoria: 'PERDIDOS',
            especie: 'CAO',
            dataCadastro: '01/01/2018'
        },
        {
            id: 3,
            nome: 'Joca',
            descricao: 'Estou desesperada para encontrá-lo, ele é bobinho, bate em tudo quando anda, é tonto, e é muito lindo, muito.',
            categoria: 'PERDIDOS',
            especie: 'CAO',
            dataCadastro: '01/01/2018'
        },
        ]);
    }
    getPets(): PetOptions[] {
        return this.pets;
    }


    getPetsByCategory(category: string, tamanho: number = 10): Observable<PetOptions[]> {
        const url = `${this.url}filtro?categoria=${category}&tamanho=${tamanho}`;
        return this.http.get<PetOptions[]>(url);
    }

    getPetsUser(): Observable<PetOptions[]> {
        // this.id_usuario = this.userService.getId();
        this.id_usuario = 1;
        const url = `${this.url}usuario/${this.id_usuario}/`;
        return this.http.get<PetOptions[]>(url);
    }

    getById(id: number): Observable<PetOptions> {
        const url = this.url + id;
        return this.http.get<PetOptions>(url);
    }
}
