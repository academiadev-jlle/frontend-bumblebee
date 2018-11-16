import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-lost-pets',
    templateUrl: 'lost-pets.component.html',
    // styleUrls: ['lost-pets.component.scss']
})
export class LostPetsComponent implements OnInit, OnDestroy {
    lostPets = [];
    filter = '';
    filterSubject: Subject<string> = new Subject();

    constructor(
        private router: ActivatedRoute
    ) {}

    ngOnInit() {
        this.lostPets = this.router.snapshot.data.lostPets.results;
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
