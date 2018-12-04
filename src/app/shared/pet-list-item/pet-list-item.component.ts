import { Component, Input } from '@angular/core';
import { PetOptions } from './pet-list-item.options';

@Component({
    selector: 'app-pet-list-item',
    templateUrl: 'pet-list-item.component.html',
    styleUrls: ['./pet-list-item.component.scss'],
})
export class PetListItemComponent {
    @Input() pet: PetOptions;

    // tslint:disable-next-line:max-line-length
    photo = 'http://www.slupsk.pl/wp-content/uploads/2018/05/dog-1210559_960_720.jpg';
}
