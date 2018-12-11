import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-edit-perfil-user',
  templateUrl: './edit-perfil-user.component.html',
  styleUrls: ['./edit-perfil-user.component.scss']
})
export class EditPerfilUserComponent implements OnInit {
  editarPerfilForm: FormGroup;
  user_id: number;
  email: string;
  nome: string;
  contato: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user_id = this.userService.getId();
    // this.user_id = 1; ==== PARA TESTES ====
    this.email = this.userService.getEmail();
    this.nome = this.userService.getNome();
    this.contato = this.userService.getContato();

    this.editarPerfilForm = this.formBuilder.group({
      email: [this.email, Validators.compose([Validators.required, Validators.email])],
      nome: [this.nome, Validators.required],
      contato: [this.contato, Validators.required]
    });
  }

  editarPerfil() {
    const email = this.editarPerfilForm.get('email').value;
    const nome = this.editarPerfilForm.get('nome').value;
    const contato = this.editarPerfilForm.get('contato').value;

    // todo
  }

}
