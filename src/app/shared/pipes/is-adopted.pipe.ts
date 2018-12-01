import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isadopted'
})
export class IsAdoptedPipe implements PipeTransform {
    transform(isAdopted: boolean) {
        if (isAdopted) {
            return 'Adotado';
        }

        return 'Para adoção';
    }
}
