import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { EspecieService } from 'src/app/shared/services/especie.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private categorias: CategoriaService,
    private especies: EspecieService,
  ) { }

  ngOnInit() {
    this.listPets = this.router.snapshot.data.listPets;
    this.categoria = this.router.snapshot.params.category;
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

  searchPets() {
    const categoria = this.searchForm.get('categoria').value;
    const especie = this.searchForm.get('especie').value;
    const busca = this.searchForm.get('busca').value;

    // todo
  }

}
