import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { PetCadComponent } from './pet-cad.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [ PetCadComponent ],
  exports: [
    PetCadComponent
  ]
})
export class PetCadModule { }
