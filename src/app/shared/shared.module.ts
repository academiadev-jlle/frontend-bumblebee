import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PetListItemComponent } from './pet-list-item/pet-list-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { IsAdoptedPipe } from './pipes/is-adopted.pipe';
import { NormalFontWeightDirective } from './directives/normal-font-weight.directives';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ClickOutsideModule } from 'ng-click-outside';
import { ImageRoundedDirective } from './directives/image-rounded.directive';
import { BgColorDirective } from './directives/bg-color.directive';
import { ImageGaleryDirective } from './directives/image-galery.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { CardsCategoriesComponent } from './cards-categories/cards-categories.component';
import { CardHomeDirective } from './directives/card-home.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        // bootstrap & font-awesome
        AngularFontAwesomeModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        NguCarouselModule,

        // events
        ClickOutsideModule,
    ],
    declarations: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent,
        PetDetailComponent,
        CarouselComponent,

        // pipes
        IsAdoptedPipe,

        // diretivas
        NormalFontWeightDirective,
        ImageRoundedDirective,
        ImageGaleryDirective,
        BgColorDirective,
        CardsCategoriesComponent,
        CardHomeDirective
    ],
    exports: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent,
        PetDetailComponent,
        CarouselComponent,
        CardsCategoriesComponent,

        // diretivas
        BgColorDirective
    ]
})

export class SharedModule { }
