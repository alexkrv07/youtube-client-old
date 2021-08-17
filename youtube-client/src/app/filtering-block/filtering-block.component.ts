import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss']
})
export class FilteringBlockComponent implements OnInit {
  filterQuery = '';
  isOrderAscending = true;

  @Output() sendSortBy = new EventEmitter<string>();
  @Output() sendSortOrder = new EventEmitter<boolean>();
  @Output() sendFilterBy = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sortByDate() {
    this.sendSortBy.emit('date');
    this.sendSortOrder.emit(this.isOrderAscending);
    this.isOrderAscending = !this.isOrderAscending;
  }

  sortByViews() {
    this.sendSortBy.emit('countView');
    this.sendSortOrder.emit(this.isOrderAscending);
    this.isOrderAscending = !this.isOrderAscending;
  }

  filterByInput() {
    this.sendFilterBy.emit(this.filterQuery);
  }

}
