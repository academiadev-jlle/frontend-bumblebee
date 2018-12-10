import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-perfil-user',
  templateUrl: './edit-perfil-user.component.html',
  styleUrls: ['./edit-perfil-user.component.scss']
})
export class EditPerfilUserComponent implements OnInit {
  editarPerfilForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editarPerfilForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  editarPerfil() {
    const email = this.editarPerfilForm.get('email').value;
    const nome = this.editarPerfilForm.get('nome').value;
    const telefone = this.editarPerfilForm.get('telefone').value;

    // todo
  }

}
