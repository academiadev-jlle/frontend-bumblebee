import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petfilter'
})
export class FilterPipe implements PipeTransform {

  transform(petList: any[], filter: string): any[] {
    if (filter) {
      return petList.filter(item => item.name.includes(filter));
    }

    return petList;
  }
}
