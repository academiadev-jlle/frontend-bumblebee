import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-cad',
  templateUrl: './user-cad.component.html',
  styleUrls: ['./user-cad.component.scss']
})
export class UserCadComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      email: ['', Validators.required],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
    });
  }


}
