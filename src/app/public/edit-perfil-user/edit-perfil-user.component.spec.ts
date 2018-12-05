import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerfilUserComponent } from './edit-perfil-user.component';

describe('PageEditPerfilComponent', () => {
  let component: EditPerfilUserComponent;
  let fixture: ComponentFixture<EditPerfilUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPerfilUserComponent ]
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
