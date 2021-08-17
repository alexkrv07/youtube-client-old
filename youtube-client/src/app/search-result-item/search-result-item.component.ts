import { Component, Input, OnInit } from '@angular/core';
import { ImageInfo } from '../models/image-info';
import { ItemResponse } from '../models/item-response';
import { Statistics } from '../models/statistics';
import { FirstPeriod, SecondPeriod, ThirdPeriod, MilisecondsPerDay } from '../shared/period-publications';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() itemResult?: ItemResponse;

  img?: ImageInfo;
  statistics?: Statistics;
  alt?: string;
  title?: string;
  currentClasses = '';

  constructor() {
  }

  ngOnInit(): void {
    if (!this.itemResult) {
      return;
    }
    this.img = this.itemResult.snippet.thumbnails.medium;
    this.statistics = this.itemResult.statistics;
    this.alt = this.itemResult.snippet.channelTitle;
    this.title = this.itemResult.snippet.title;
    this.checkDatePublication();

  }

  checkDatePublication() {
    if (!this.itemResult) {
      return;
    }
    const dateOfPublication = new Date(this.itemResult.snippet.publishedAt).valueOf();
    const currentDate = new Date().valueOf();
    const AgeInDays = Math.floor((currentDate - dateOfPublication) / MilisecondsPerDay);
    console.log(currentDate);
    console.log(dateOfPublication);
    console.log(AgeInDays);

    if (AgeInDays >= ThirdPeriod) {
      this.currentClasses = 'publishedInThirdPeriod';
    } else if (AgeInDays <= SecondPeriod && AgeInDays >= FirstPeriod) {
      this.currentClasses = 'publishedInSecondPeriod';
    } else if (AgeInDays <= FirstPeriod) {
      this.currentClasses = 'publishedInFirstPeriod';
    }
  }
}
