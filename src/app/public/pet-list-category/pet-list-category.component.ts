import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { EspecieService } from 'src/app/shared/services/especie.service';

@Component({
  selector: 'app-pet-list-category',
  templateUrl: './pet-list-category.component.html',
  styleUrls: ['./pet-list-category.component.scss']
})
export class PetListCategoryComponent implements OnInit, OnDestroy {
  listPets = [];
  listCategorias = [];
  listEspecies = [];
  filter = '';
  categoria = '';
  filterSubject: Subject<string> = new Subject();

  constructor(
    private router: ActivatedRoute,
    private categorias: CategoriaService,
    private especies: EspecieService,
  ) { }

  ngOnInit() {
    this.listPets = this.router.snapshot.data.listPets;
    this.listCategorias = this.categorias.getCategorias();
    this.listEspecies = this.especies.getEspecies();
    this.filterSubject
        .pipe(
            debounceTime(300)
        )
        .subscribe(value => this.filter = value);
  }

  ngOnDestroy() {
    this.filterSubject.unsubscribe();
  }

  keyUp(event) {
      this.filterSubject.next(event.target.value);
  }

}
