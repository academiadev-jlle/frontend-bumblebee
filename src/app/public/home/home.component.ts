import { Component, OnInit } from '@angular/core';
import { PetOptions } from 'src/app/shared/pet-list-item/pet-list-item.options';
import { PetsService } from 'src/app/shared/services/pets.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

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

  constructor(private petService: PetsService) {  }

  ngOnInit() {
    this.petService.getLost().subscribe(resposta => this.lostPets = resposta);
    this.petService.getAdoption().subscribe(resposta => this.adoptionPets = resposta);
    this.petService.getAdopted().subscribe(resposta => this.adoptedPets = resposta);
  }

}
