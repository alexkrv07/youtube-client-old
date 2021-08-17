import { Component, Input, OnInit } from '@angular/core';
import { ItemResponse } from '../models/item-response';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  @Input() resultList?: ItemResponse[];
  @Input() sortField?: string;
  @Input() filterQuery?: string;
  @Input() sortOrder?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
