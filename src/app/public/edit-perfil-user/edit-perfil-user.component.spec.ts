import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerfilUserComponent } from './edit-perfil-user.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('PageEditPerfilComponent', () => {
  let component: EditPerfilUserComponent;
  let fixture: ComponentFixture<EditPerfilUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPerfilUserComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
