import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-cad',
  templateUrl: './user-cad.component.html',
  styleUrls: ['./user-cad.component.scss']
})
export class UserCadComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
    });
  }

  cadastraUsuario() {
    const email = this.cadastroForm.get('email').value;
    const nome = this.cadastroForm.get('nome').value;
    const telefone = this.cadastroForm.get('telefone').value;
    const senha = this.cadastroForm.get('senha').value;
    this.authService.cadastraUsuario(email, nome, telefone, senha)
      .subscribe(
        certo => console.log(certo),
        err => {
          console.log(err);
          this.cadastroForm.reset();
        }
      );
  }


}
