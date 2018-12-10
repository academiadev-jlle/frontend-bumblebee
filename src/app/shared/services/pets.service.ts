import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PetOptions } from '../pet-list-item/pet-list-item.options';

@Injectable({
    providedIn: 'root'
})
export class PetsService {

    // ========== PARA TESTES ==========
    pets: PetOptions[] = [];
    constructor(private http: HttpClient) {
        this.pets.push(...[{
            id: 1,
            nome: 'Diguinho',
            descricao: 'Fofo, pequenininho, quase não late, tá sempre abanando o rabo, e tem medo da rua.',
            categoria: 'PERDIDOS',
            especie: 'CAO'
        },
        {
            id: 2,
            nome: 'Dunga',
            descricao: 'Grandão, pelos claros cor creme, muit dócil e simpático.',
            categoria: 'PERDIDOS',
            especie: 'CAO'
        },
        {
            id: 3,
            nome: 'Joca',
            descricao: 'Estou desesperada para encontrá-lo, ele é bobinho, bate em tudo quando anda, é tonto, e é muito lindo, muito.',
            categoria: 'PERDIDOS',
            especie: 'CAO'
        },
        ])
    }
    getPets(): PetOptions[] {
        return this.pets;
    }
    // ========== ./PARA TESTES ==========

    private url = 'https://test-bumblebeepets.herokuapp.com/pet/pet';

    // constructor(
    //     private http: HttpClient
    // ) { }

    // get(): Observable<PetOptions[]> {
    //     return this.http.get<PetOptions[]>(this.url);
    // }

    getPetsByCategory(category: string): Observable<PetOptions[]> {
        const url = `${this.url}categoria/${category}/`;
        // console.log(url);
        // return this.http.get<PetOptions[]>(url);
        return this.http.get<PetOptions[]>(this.url);
    }

    getPetsUser(): Observable<PetOptions[]> {
        return this.http.get<PetOptions[]>(this.url);
    }

    // ============= SAIU FORA, MAS ESTÁ AÍ PARA CONSULTA =============

    // getLost(): Observable<PetOptions[]> {
    //     return this.http.get<PetOptions[]>(this.url);
    // }

    // getAdoption(): Observable<PetOptions[]> {
    //     return this.http.get<PetOptions[]>(this.url);
    // }

    // getAdopted(): Observable<PetOptions[]> {
    //     return this.http.get<PetOptions[]>(this.url);
    // }

    // ============= ./SAIU FORA, MAS ESTÁ AÍ PARA CONSULTA =============

    getById(id: number): Observable<PetOptions> {
        const url = this.url + id;
        return this.http.get<PetOptions>(url);
    }
}
