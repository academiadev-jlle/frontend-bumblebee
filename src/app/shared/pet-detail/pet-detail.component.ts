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
  photo1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIh_Lo1WiWd35K2nHcgXo0Q6T6WBqIzrIK7mXgEIKJ4M7CVk_Eg';
  photo2 = 'http://portalmelhoresamigos.com.br/wp-content/uploads/2017/02/cachorro-psicina_DOMINIO-PUBLICO.jpg';
  photo3 = 'https://t2.ea.ltmcdn.com/pt/images/9/1/5/img_meu_cachorro_tem_o_nariz_frio_e_normal_21519_600.jpg';
  // tslint:disable-next-line:max-line-length
  photo4 = 'https://www.extra-imagens.com.br/decoracao/ObjetosDecorativos/14012651/1045236395/cachorro-pug-deitado-realista-jardim-decoracao-resina-14012651.jpg';
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
