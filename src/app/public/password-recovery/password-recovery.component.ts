import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  recuperarSenhaForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recuperarSenhaForm = this.formBuilder.group({
      senhaNova: ['', Validators.required],
      senhaNovaRepita: ['', Validators.required]
    });
  }

  recuperarSenha() {
    const senhaNova = this.recuperarSenhaForm.get('senhaNova').value;

    // todo
  }
}