import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../services/pets.service';
import { PetOptions } from '../pet-list-item/pet-list-item.options';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIh_Lo1WiWd35K2nHcgXo0Q6T6WBqIzrIK7mXgEIKJ4M7CVk_Eg';
  pet: PetOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetsService,
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((param) => {
        this.petService.getById(parseInt(param.id, 10)).subscribe(pet => this.pet = pet);
      });
  }
}
