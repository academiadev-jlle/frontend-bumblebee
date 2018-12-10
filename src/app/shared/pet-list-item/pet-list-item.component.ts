import { Component, Input } from '@angular/core';
import { PetOptions } from './pet-list-item.options';

@Component({
    selector: 'app-pet-list-item',
    templateUrl: 'pet-list-item.component.html',
    styleUrls: ['./pet-list-item.component.scss'],
})
export class PetListItemComponent {
    @Input() pet: PetOptions;

    // se não existir foto, usar esta
    photo = '../../../assets/sem-imagem.jpg';

}
