import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EspecieOptions } from '../options/especie.options';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {
  private url = 'https://test-bumblebeepets.herokuapp.com/pet/especies/';

  constructor(
    private http: HttpClient
  ) { }

  getEspecies(): Observable<EspecieOptions[]> {
    return this.http.get<EspecieOptions[]>(this.url);
  }
}
