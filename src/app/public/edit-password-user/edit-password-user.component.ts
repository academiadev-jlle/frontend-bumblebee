import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-edit-password-user',
  templateUrl: './edit-password-user.component.html',
  styleUrls: ['./edit-password-user.component.scss']
})
export class EditPasswordUserComponent implements OnInit {
  editarSenhaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.editarSenhaForm = this.formBuilder.group({
      senhaAtual: ['', Validators.required],
      senhaNova: ['', Validators.required],
      senhaNovaRepita: ['', Validators.required]
    });
  }

  editarSenha() {
    const senhaAtual = this.editarSenhaForm.get('senhaAtual').value;
    const senhaNova = this.editarSenhaForm.get('senhaNova').value;
    const id_usuario = this.userService.getId();

    // todo
  }
}