import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required]
    });
  }

  logar() {
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;

    this.authService.authenticate(email, senha)
      .subscribe(
        certo => console.log(certo),
        err => {
          console.log(err);
          this.loginForm.reset();
        }
      );
  }
}
