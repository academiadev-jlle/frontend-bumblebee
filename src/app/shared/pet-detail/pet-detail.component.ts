import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../services/pets.service';
import { PetOptions } from '../pet-list-item/pet-list-item.options';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  pet: PetOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((param) => {
        this.petService.getById(parseInt(param.id, 10)).subscribe(pet => this.pet = pet);
      });
  }
}
