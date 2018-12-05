import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PorteOptions } from '../options/porte.options';

@Injectable({
  providedIn: 'root'
})
export class PorteService {
  private url = 'https://test-bumblebeepets.herokuapp.com/pet/portes/';

  constructor(
    private http: HttpClient
  ) { }

  getPortes(): Observable<PorteOptions[]> {
    return this.http.get<PorteOptions[]>(this.url);
  }
}
