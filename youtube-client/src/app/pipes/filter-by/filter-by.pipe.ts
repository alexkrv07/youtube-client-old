import { Pipe, PipeTransform } from '@angular/core';
import { ItemResponse } from '../../models/item-response';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

transform(initialList: ItemResponse[] | undefined, query?: string): ItemResponse[] | undefined {
    if (!initialList) {
      return;
    }
    if (!query) {
      return initialList;
    }

    return initialList.filter(item => item.snippet.title.includes(query));
  }

}
