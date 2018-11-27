import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './shared/pet-detail/pet-detail.component';
import { HomeComponent } from './public/home/home.component';
import { PetCadComponent } from './public/pet-cad/pet-cad.component';
import { LoginComponent } from './public/login/login.component';
import { UserCadComponent } from './public/user-cad/user-cad.component';
// import { LostPetsComponent } from './public/lost-pets/lost-pets.component';
// import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';
import { PetListCategoryComponent } from './public/pet-list-category/pet-list-category.component';
import { ListPetsResolver } from './public/pet-list-category/list-pets.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pet/:id', component: PetDetailComponent },
  { path: 'user/cad', component: UserCadComponent },
  { path: 'pet/cad', component: PetCadComponent },
  {
    path: 'pet/categoria/:category',
    component: PetListCategoryComponent,
    resolve: {
      lostPets: ListPetsResolver
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
