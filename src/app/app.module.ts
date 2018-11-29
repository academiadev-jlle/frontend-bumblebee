import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
// import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';
import { ListPetsResolver } from './public/pet-list-category/list-pets.resolver';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PublicModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
  ],
  providers: [
    // LostPetsResolver,
    ListPetsResolver
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
