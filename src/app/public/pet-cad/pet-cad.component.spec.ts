import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCadComponent } from './pet-cad.component';

describe('PetCadComponent', () => {
  let component: PetCadComponent;
  let fixture: ComponentFixture<PetCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCadComponent ]
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
