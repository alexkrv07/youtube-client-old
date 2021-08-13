import { Component, Input } from '@angular/core';
import { ItemResponse } from './models/item-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isShowFilterBlock = false;
  searchResultList?: ItemResponse[];
  fieldForSortResultLis = '';
  queryForFilterResultList = '';
  isOrderAscending = true;
  title = 'youtube-client';

  toggleShowFilterBlock(isShowFilterBlock: boolean) {
    this.isShowFilterBlock = isShowFilterBlock;
  }

  getSearchResultList(searchResultList: ItemResponse[]) {
    this.searchResultList = searchResultList;
  }

  getFieldForSortResultList(field: string) {
    this.fieldForSortResultLis = field;
  }

  getSortOrder(isOrderAscending: boolean) {
    this.isOrderAscending = isOrderAscending;
  }

  getQueryForFilterReasultList(query: string) {
    this.queryForFilterResultList = query;
  }
}
