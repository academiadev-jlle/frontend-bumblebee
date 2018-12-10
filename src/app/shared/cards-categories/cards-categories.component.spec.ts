import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoriesComponent } from './cards-categories.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardsCategoriesComponent', () => {
  let component: CardsCategoriesComponent;
  let fixture: ComponentFixture<CardsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardsCategoriesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
