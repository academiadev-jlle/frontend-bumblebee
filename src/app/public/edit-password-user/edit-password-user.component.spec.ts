import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasswordUserComponent } from './edit-password-user.component';

describe('EditPasswordUserComponent', () => {
  let component: EditPasswordUserComponent;
  let fixture: ComponentFixture<EditPasswordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPasswordUserComponent ]
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
