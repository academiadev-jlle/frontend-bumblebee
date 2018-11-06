import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './shared/pet-detail/pet-detail.component';
import { HomeComponent } from './public/home/home.component';
import { PetCadComponent } from './public/pet-cad/pet-cad.component';
import { LoginComponent } from './public/login/login.component';
import { UserCadComponent } from './public/user-cad/user-cad.component';

const routes: Routes = [
  { path: 'pet/:id/:slug', component: PetDetailComponent },
  { path: 'user/cad', component: UserCadComponent },
  { path: 'pet/cad', component: PetCadComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
