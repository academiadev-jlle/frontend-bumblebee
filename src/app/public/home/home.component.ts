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

  // ============== PARA TESTE ==============
  lostPets: PetOptions[] = [];
  adoptionPets: PetOptions[] = [];
  adoptedPets: PetOptions[] = [];

  constructor(
    private petService: PetsService
  ) { }

  ngOnInit() {
    this.lostPets = this.petService.getPets();
    this.adoptionPets = this.petService.getPets();
    this.adoptedPets = this.petService.getPets();
  }
  // ============== ./PARA TESTE ==============

  // this.listCategorias = this.categorias.getCategorias();

  // pet: PetOptions = {
  //   id: 1,
  //   nome: 'diguinho',
  //   descricao: 'fofo e simpático',
  //   categoria: 'perdidos',
  //   especie: 'cão'
  // };



  // constructor(private petService: PetsService) { }
  // lostPets: PetOptions[] = [];
  // adoptionPets: PetOptions[] = [];
  // adoptedPets: PetOptions[] = [];

  // ngOnInit() {
  //   this.petService.getPetsByCategory('perdidos').subscribe(resposta => this.lostPets = resposta);
  //   this.petService.getPetsByCategory('para-adocao').subscribe(resposta => this.adoptionPets = resposta);
  //   this.petService.getPetsByCategory('adotados').subscribe(resposta => this.adoptedPets = resposta);
  // }

}
