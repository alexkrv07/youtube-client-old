import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemResponse } from '../models/item-response';
import { ResponseExample } from '../response-example';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sendIsShowFilterBlock = new EventEmitter<boolean>();

  @Output() sendSearchResultList = new EventEmitter<ItemResponse[]>();

  IsShowFilterBlock = false;
  response = ResponseExample;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilteringBlock() {
    this.IsShowFilterBlock = !this.IsShowFilterBlock;
    console.log(this.IsShowFilterBlock);
    this.sendIsShowFilterBlock.emit(this.IsShowFilterBlock);
  }

  getResultList() {
    this.sendSearchResultList.emit(this.response.items)
  }
}
