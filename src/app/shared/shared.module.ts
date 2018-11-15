import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PetListItemComponent } from './pet-list-item/pet-list-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { IsAdoptedPipe } from './pipes/is-adopted.pipe';
import { NormalFontWeightDirective } from './directives/normal-font-weight.directives';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent,
        PetDetailComponent,
        IsAdoptedPipe,
        NormalFontWeightDirective
    ],
    exports: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent,
        PetDetailComponent
    ]
})

export class SharedModule { }
