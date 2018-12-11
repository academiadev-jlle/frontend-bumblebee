import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasswordUserComponent } from './edit-password-user.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('EditPasswordUserComponent', () => {
  let component: EditPasswordUserComponent;
  let fixture: ComponentFixture<EditPasswordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPasswordUserComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, HttpClientModule]
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
