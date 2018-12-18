import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { EspecieService } from 'src/app/shared/services/especie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PetsService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-pet-list-category',
  templateUrl: './pet-list-category.component.html',
  styleUrls: ['./pet-list-category.component.scss']
})
export class PetListCategoryComponent implements OnInit {
  listPets = [];
  listCategorias = [];
  listEspecies = [];

  filter = '';
  categoria = '';
  filterSubject: Subject<string> = new Subject();
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

    private router: ActivatedRoute,

    private pets: PetsService,
    private categorias: CategoriaService,
    private especies: EspecieService,
  ) { }

  ngOnInit() {
    // this.listPets = this.pets.getPets();
    this.listPets = this.router.snapshot.data.listPets;
    const cat = this.router.snapshot.params.category;

    if (cat === 'todos') {
      this.categoria = 'Todos';
    } else {
      this.categoria = this.categorias.getCategorias().filter(
        resp => resp.enum === cat
      )[0].descricao;
    }

    this.listCategorias = this.categorias.getCategorias();
    this.listEspecies = this.especies.getEspecies();

    this.searchForm = this.formBuilder.group({
      categoria: [''],
      especie: [''],
      busca: ['']
    });

    // this.filterSubject
    //   .pipe(
    //     debounceTime(300)
    //   )
    //   .subscribe(value => this.filter = value);
  }

  filtrarPets() {
    const categoria = this.searchForm.get('categoria').value;
    const especie = this.searchForm.get('especie').value;
    const busca = this.searchForm.get('busca').value;

    // todo
  }

}
