import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { LostPetsComponent } from './lost-pets/lost-pets.component';
import { FilterPipe } from './lost-pets/filter.pipe';
import { UserCadComponent } from './user-cad/user-cad.component';
import { LoginComponent } from './login/login.component';
import { PetListCategoryComponent } from './pet-list-category/pet-list-category.component';
import { SliderComponent } from './slider/slider.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PetListUserComponent } from './pet-list-user/pet-list-user.component';
import { RouterModule } from '@angular/router';
import { EditPasswordUserComponent } from './edit-password-user/edit-password-user.component';
import { EditPerfilUserComponent } from './edit-perfil-user/edit-perfil-user.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetCadComponent } from './pet-cad/pet-cad.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CarouselModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    // LostPetsComponent,
    FilterPipe,

    UserCadComponent,
    LoginComponent,
    PetCadComponent,
    SliderComponent,
    PerfilUserComponent,
    PetListCategoryComponent,
    PetListUserComponent,
    EditPasswordUserComponent,
    EditPerfilUserComponent,
    PetEditComponent,
    LostPasswordComponent,
    PasswordRecoveryComponent,
    PageNotFoundComponent
  ],
  exports: [
    HomeComponent,
    // LostPetsComponent,

    UserCadComponent,
    LoginComponent,
    UserCadComponent,
    PageNotFoundComponent
  ]
})

export class PublicModule { }
