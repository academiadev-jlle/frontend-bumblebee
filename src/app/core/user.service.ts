import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    id: number;
    nome: string;

    constructor(
        private authService: AuthService
    ) { }

    setValues() {
        this.authService.getInfo().subscribe(
            resp => {
                this.id = resp['body']['id'];
                this.nome = resp['body']['nome'];
            }
        );
    }

    getId() {
        return this.id;
    }
}
