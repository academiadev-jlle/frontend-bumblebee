import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    id: number;
    email: string;
    nome: string;
    contato: string;

    constructor(
        private authService: AuthService
    ) { }

    setValues() {
        this.authService.getInfo().subscribe(
            resp => {
                this.id = resp['body']['id'];
                this.nome = resp['body']['nome'];
                this.email = resp['body']['email'];
                this.contato = resp['body']['contato'];
            }
        );
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getNome() {
        return this.nome;
    }

    getContato() {
        return this.contato;
    }
}
