import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PetOptions } from '../pet-list-item/pet-list-item.options';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

    private url = 'https://test-bumblebeepets.herokuapp.com/pet/';

    constructor(
        private http: HttpClient
    ) {}

    get(): Observable<PetOptions[]> {
        return this.http.get<PetOptions[]>(this.url);
    }

    getLost(): Observable<PetOptions[]> {
        return this.http.get<PetOptions[]>(this.url);
    }

    getAdoption(): Observable<PetOptions[]> {
        return this.http.get<PetOptions[]>(this.url);
    }

    getAdopted(): Observable<PetOptions[]> {
        return this.http.get<PetOptions[]>(this.url);
    }

    getById(id: number): Observable<PetOptions> {
        const url = this.url + '/' + id;
        return this.http.get<PetOptions>(url);
    }
}
