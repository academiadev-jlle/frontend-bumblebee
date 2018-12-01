import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pet-list-user',
  templateUrl: './pet-list-user.component.html',
  styleUrls: ['./pet-list-user.component.scss']
})
export class PetListUserComponent implements OnInit, OnDestroy {
  listPetsUser = [];
  filter = '';
  filterSubject: Subject<string> = new Subject();
  photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIh_Lo1WiWd35K2nHcgXo0Q6T6WBqIzrIK7mXgEIKJ4M7CVk_Eg';

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.listPetsUser = this.router.snapshot.data.listPetsUser;
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
