import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './shared/pet-detail/pet-detail.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { UserCadComponent } from './public/user-cad/user-cad.component';
// import { LostPetsComponent } from './public/lost-pets/lost-pets.component';
// import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';
import { PetListCategoryComponent } from './public/pet-list-category/pet-list-category.component';
import { ListPetsResolver } from './public/pet-list-category/list-pets.resolver';
import { PetCadComponent } from './public/pet-cad/pet-cad.component';
import { PerfilUserComponent } from './public/perfil-user/perfil-user.component';
import { PetListUserComponent } from './public/pet-list-user/pet-list-user.component';
import { ListPetsUserResolver } from './public/pet-list-user/pet-list-user.resolver';
import { EditPasswordUserComponent } from './public/edit-password-user/edit-password-user.component';
import { EditPerfilUserComponent } from './public/edit-perfil-user/edit-perfil-user.component';
import { PetEditComponent } from './public/pet-edit/pet-edit.component';
import { LostPasswordComponent } from './public/lost-password/lost-password.component';
import { PasswordRecoveryComponent } from './public/password-recovery/password-recovery.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '404', component: PageNotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pet/:id', component: PetDetailComponent },
  { path: 'cad/pet', component: PetCadComponent },
  { path: 'edit/pet/:id', component: PetEditComponent },
  { path: 'cad/user', component: UserCadComponent },
  { path: 'edit/password/user', component: EditPasswordUserComponent },
  { path: 'recovery/password/user', component: PasswordRecoveryComponent },
  { path: 'senha/perdida', component: LostPasswordComponent },
  { path: 'perfil/user', component: PerfilUserComponent },
  { path: 'edit/perfil/user', component: EditPerfilUserComponent },
  {
    path: 'pet/categoria/:category',
    component: PetListCategoryComponent,
    // resolve: {
    //   listPets: ListPetsResolver
    // }
  },
  {
    path: 'user/pets',
    component: PetListUserComponent,
    resolve: {
      listPetsUser: ListPetsUserResolver
    }
  },
  { path: '**', redirectTo: '404' }
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
