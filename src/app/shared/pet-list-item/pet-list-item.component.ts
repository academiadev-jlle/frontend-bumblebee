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
    photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIh_Lo1WiWd35K2nHcgXo0Q6T6WBqIzrIK7mXgEIKJ4M7CVk_Eg';
}
