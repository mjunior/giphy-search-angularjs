import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchManualComponent } from 'app/giphy/giphy-search-manual/giphy-search-manual.component';
import { GiphySearchService } from 'app/giphy/giphy-search.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
  declarations: [ GiphySearchManualComponent ]
})
export class GiphySearchManualModule { }