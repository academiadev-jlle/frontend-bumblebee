import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id_usuario: number;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

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
        certo => {
          this.userService.setValues();
          this.router.navigate(['/home']);
        }
        ,
        err => {
          console.log(err);
          this.loginForm.reset();
        }
      );
  }

  pegarInfos() {
    this.authService.getInfo()
      .subscribe(
        good => console.log(good),
        err => console.log(err)
      );
  }
}
