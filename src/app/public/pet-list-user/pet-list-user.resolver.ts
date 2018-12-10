import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PetsService } from 'src/app/shared/services/pets.service';
import { PetOptions } from 'src/app/shared/options/pet-list-item.options';

@Injectable()
export class ListPetsUserResolver implements Resolve<Observable<PetOptions[]>> {
    constructor(private pet: PetsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PetOptions[]> {
        return this.pet.getPetsUser();
    }
}
