import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListCategoryComponent } from './pet-list-category.component';

describe('PetListCategoryComponent', () => {
  let component: PetListCategoryComponent;
  let fixture: ComponentFixture<PetListCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
