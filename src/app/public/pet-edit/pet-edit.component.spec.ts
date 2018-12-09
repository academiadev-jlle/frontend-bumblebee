import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetEditComponent } from './pet-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PetEditComponent', () => {
  let component: PetEditComponent;
  let fixture: ComponentFixture<PetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetEditComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
