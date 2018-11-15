import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PublicModule,
    AppRoutingModule
  ],
  providers: [
    LostPetsResolver
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
