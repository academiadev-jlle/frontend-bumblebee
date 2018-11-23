import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PetOptions } from 'src/app/shared/pet-list-item/pet-list-item.options';
import { PetsService } from 'src/app/shared/services/pets.service';

@Injectable()
export class LostPetsResolver implements Resolve<Observable<PetOptions[]>> {
    constructor(private pet: PetsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PetOptions[]> {
        // const id = route.params.id;
        return this.pet.getLost();
    }
}

