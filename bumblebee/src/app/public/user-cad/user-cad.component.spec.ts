import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCadComponent } from './user-cad.component';

describe('UserCadComponent', () => {
  let component: UserCadComponent;
  let fixture: ComponentFixture<UserCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
