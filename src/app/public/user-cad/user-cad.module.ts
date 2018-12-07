import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { UserCadComponent } from './user-cad.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [ UserCadComponent ],
  exports: [
    UserCadComponent
  ]
})
export class UserCadModule { }
