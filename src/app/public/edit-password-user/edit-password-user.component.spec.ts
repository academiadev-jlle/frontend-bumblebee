import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasswordUserComponent } from './edit-password-user.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditPasswordUserComponent', () => {
  let component: EditPasswordUserComponent;
  let fixture: ComponentFixture<EditPasswordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPasswordUserComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasswordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
