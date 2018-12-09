import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUserComponent } from './perfil-user.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PerfilUserComponent', () => {
  let component: PerfilUserComponent;
  let fixture: ComponentFixture<PerfilUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUserComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
