import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../pets.service';
import { PetOptions } from '../pet-list-item/pet-list-item.options';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  pet: PetOptions;

  constructor(private activatedRoute: ActivatedRoute, private petService: PetsService) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((route) => {
        this.pet = this.petService.getById(parseInt(route.id, 10));
      });
  }
}
