import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pet-list-category',
  templateUrl: './pet-list-category.component.html',
  styleUrls: ['./pet-list-category.component.scss']
})
export class PetListCategoryComponent implements OnInit, OnDestroy {
  listPets = [];
  filter = '';
  filterSubject: Subject<string> = new Subject();

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.listPets = this.router.snapshot.data.listPets;
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
