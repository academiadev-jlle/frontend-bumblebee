import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PetCadComponent } from './pet-cad/pet-cad.component';
import { UserCadComponent } from './user-cad/user-cad.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
      HomeComponent,
      LoginComponent,
      PetCadComponent,
      UserCadComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    PetCadComponent,
    UserCadComponent
  ]
})

export class PublicModule { }
