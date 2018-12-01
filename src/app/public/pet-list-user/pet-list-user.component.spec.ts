import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListUserComponent } from './pet-list-user.component';

describe('PetListUserComponent', () => {
  let component: PetListUserComponent;
  let fixture: ComponentFixture<PetListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
