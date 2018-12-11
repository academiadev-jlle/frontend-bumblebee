import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/shared/services/pets.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PetOptions } from 'src/app/shared/options/pet-list-item.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  lostPets: PetOptions[] = [];
  adoptionPets: PetOptions[] = [];
  adoptedPets: PetOptions[] = [];

  constructor(private petService: PetsService) { }

  ngOnInit() {
    this.petService.getPetsByCategory('PERDIDOS', 3).subscribe(resposta => this.lostPets = resposta);
    this.petService.getPetsByCategory('ADOCAO', 3).subscribe(resposta => this.adoptionPets = resposta);
    this.petService.getPetsByCategory('ADOTADOS', 3).subscribe(resposta => this.adoptedPets = resposta);
  }
}
