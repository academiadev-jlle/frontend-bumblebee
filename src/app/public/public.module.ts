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
import { PetCadComponent } from './pet-cad/pet-cad.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent,
    // LostPetsComponent,
    FilterPipe,

    UserCadComponent,
    LoginComponent,
    PetListCategoryComponent,
    SliderComponent,
    PetCadComponent,
  ],
  exports: [
    HomeComponent,
    // LostPetsComponent,

    UserCadComponent,
    LoginComponent
  ]
})

export class PublicModule { }
