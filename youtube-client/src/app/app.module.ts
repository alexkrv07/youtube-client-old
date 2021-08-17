import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { FilteringBlockComponent } from './filtering-block/filtering-block.component';
import { CutTextPipe } from './pipes/cut-text/cut-text.pipe';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { SortByPipe } from './pipes/sort-by/sort-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultItemComponent,
    SearchResultListComponent,
    FilteringBlockComponent,
    CutTextPipe,
    FilterByPipe,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
