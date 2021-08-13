import { Pipe, PipeTransform } from '@angular/core';
import { ItemResponse } from '../../models/item-response';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

transform(initialList: ItemResponse[] | undefined, query?: string, isOrderAscending?: boolean): ItemResponse[] | undefined {
  if (!initialList) {
    return;
  }
    let result = initialList;
    if (query) {
      switch (query) {
        case 'date':
          result = result.sort((item1, item2) => {
            const date1 = new Date(item1.snippet.publishedAt).getSeconds();
            const date2 = new Date(item2.snippet.publishedAt).getSeconds();
            return date1 - date2;
          });
          break;
        case 'countView':
          result = result.sort((item1, item2) => {
            const countView1 = +item1.statistics.viewCount;
            const countView2 = +item2.statistics.viewCount;
            return countView1 - countView2;
          });
          break;
        default:
          break;
      }
    }

    if (!isOrderAscending) {
      result = result.reverse();
    }

    return result;
  }

}
