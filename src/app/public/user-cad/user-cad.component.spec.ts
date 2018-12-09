import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCadComponent } from './user-cad.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('UserCadComponent', () => {
  let component: UserCadComponent;
  let fixture: ComponentFixture<UserCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCadComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.cadastroForm.valid).toBeFalsy();
  });

  it('all fields should be required', () => {
    const email = component.cadastroForm.controls['email'];
    const nome = component.cadastroForm.controls['nome'];
    const telefone = component.cadastroForm.controls['telefone'];
    const senha = component.cadastroForm.controls['senha'];
    const confirmacaoSenha = component.cadastroForm.controls['confirmacaoSenha'];

    expect(email.errors['required']).toBeTruthy();
    expect(nome.errors['required']).toBeTruthy();
    expect(telefone.errors['required']).toBeTruthy();
    expect(senha.errors['required']).toBeTruthy();
    expect(confirmacaoSenha.errors['required']).toBeTruthy();
  });

  it('fields values should be stored correctly', () => {
    const email_teste = 'example@domain.org';
    const nome_teste = 'Example Name';
    const telefone_teste = '999999999';
    const senha_teste = 'examplePassword!@#$';

    component.cadastroForm.controls['email'].setValue(email_teste);
    component.cadastroForm.controls['nome'].setValue(nome_teste);
    component.cadastroForm.controls['telefone'].setValue(telefone_teste);
    component.cadastroForm.controls['senha'].setValue(senha_teste);
    component.cadastroForm.controls['confirmacaoSenha'].setValue(senha_teste);

    expect(component.cadastroForm.valid).toBeTruthy();
    expect(component.cadastroForm.get('email').value).toBe(email_teste);
    expect(component.cadastroForm.get('nome').value).toBe(nome_teste);
    expect(component.cadastroForm.get('telefone').value).toBe(telefone_teste);
    expect(component.cadastroForm.get('senha').value).toBe(senha_teste);
    expect(component.cadastroForm.get('confirmacaoSenha').value).toBe(senha_teste);
  });
});
