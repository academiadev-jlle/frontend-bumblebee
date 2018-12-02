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
import { ListPetsUserResolver } from './public/pet-list-user/pet-list-user.resolver';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClickOutsideModule } from 'ng-click-outside';
import { ImageRoundedDirective } from './shared/directives/image-rounded.directive';

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

    // events
    ClickOutsideModule,

    // bootstrap & font-awesome
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [
    // LostPetsResolver,
    ListPetsResolver,
    ListPetsUserResolver
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
