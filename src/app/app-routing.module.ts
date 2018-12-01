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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pet/:id', component: PetDetailComponent },
  { path: 'cad/pet', component: PetCadComponent },
  { path: 'cad/user', component: UserCadComponent },
  { path: 'edit/password/user', component: EditPasswordUserComponent },
  { path: 'perfil/user', component: PerfilUserComponent },
  { path: 'edit/perfil/user', component: EditPerfilUserComponent },
  {
    path: 'pet/categoria/:category',
    component: PetListCategoryComponent,
    resolve: {
      listPets: ListPetsResolver
    }
  },
  {
    path: 'user/pets',
    component: PetListUserComponent,
    resolve: {
      listPetsUser: ListPetsUserResolver
    }
  },
  // {
  //   path: 'lost',
  //   component: LostPetsComponent,
  //   resolve: {
  //     lostPets: LostPetsResolver
  //   }
  // },
  {
    path: '**',
    component: HomeComponent,
    // resolve: {
    //   lostPets: LostPetsComponent
    // }
  },
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
