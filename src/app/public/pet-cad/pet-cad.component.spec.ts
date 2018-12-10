import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCadComponent } from './pet-cad.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('PetCadComponent', () => {
  let component: PetCadComponent;
  let fixture: ComponentFixture<PetCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetCadComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
