import { Component, Input } from '@angular/core';
import { PetOptions } from '../options/pet-list-item.options';

@Component({
    selector: 'app-pet-list-item',
    templateUrl: 'pet-list-item.component.html',
    styleUrls: ['./pet-list-item.component.scss'],
})
export class PetListItemComponent {
    @Input() pet: PetOptions;

    // se não existir foto, usar esta
    photo = '../../../assets/sem-imagem.jpg';

    fotos = [
        { id: 1, foto: '../../../assets/dogs/1.jpg' },
        { id: 2, foto: '../../../assets/dogs/2.jpg' },
        { id: 3, foto: '../../../assets/dogs/3.jpg' },
        { id: 4, foto: '../../../assets/dogs/4.jpeg' },
        { id: 5, foto: '../../../assets/dogs/5.png' },
        { id: 6, foto: '../../../assets/dogs/6.jpeg' },
        { id: 7, foto: '../../../assets/dogs/7.jpg' },
        { id: 8, foto: '../../../assets/dogs/8.jpg' },
        { id: 9, foto: '../../../assets/dogs/9.jpg' },
        { id: 10, foto: '../../../assets/dogs/10.jpg' },
        { id: 11, foto: '../../../assets/dogs/11.jpg' },
        { id: 12, foto: '../../../assets/dogs/12.png' },
        { id: 13, foto: '../../../assets/dogs/13.jpg' },
        { id: 14, foto: '../../../assets/dogs/14.jpg' },
        { id: 15, foto: '../../../assets/dogs/15.jpeg' },
        { id: 16, foto: '../../../assets/dogs/16.jpeg' },
        { id: 17, foto: '../../../assets/dogs/17.jpg' },
        { id: 18, foto: '../../../assets/dogs/18.jpg' },
        { id: 19, foto: '../../../assets/dogs/19.jpg' },
        { id: 20, foto: '../../../assets/dogs/20.jpg' }
    ];
}
