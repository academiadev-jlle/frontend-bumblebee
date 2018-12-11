import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('all fields should be required', () => {
    const email = component.loginForm.controls['email'];
    const senha = component.loginForm.controls['senha'];

    expect(email.errors['required']).toBeTruthy();
    expect(senha.errors['required']).toBeTruthy();
  });

  it('fields values should be stored correctly', () => {
    const email_teste = 'example@domain.org';
    const senha_teste = 'examplePassword!@#$';

    component.loginForm.controls['email'].setValue(email_teste);
    component.loginForm.controls['senha'].setValue(senha_teste);

    expect(component.loginForm.valid).toBeTruthy();
    expect(component.loginForm.get('email').value).toBe(email_teste);
    expect(component.loginForm.get('senha').value).toBe(senha_teste);
  });
});
