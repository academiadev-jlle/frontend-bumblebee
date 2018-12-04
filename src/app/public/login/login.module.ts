import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [ LoginComponent ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
