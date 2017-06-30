import { GiphySearchListModule } from './../giphy-search-list/giphy-search-list.module';
import { ShareModule } from './../../share/share.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchManualComponent } from 'app/giphy/giphy-search-manual/giphy-search-manual.component';
import { GiphySearchService } from 'app/giphy/giphy-search.service';
import { GiphySearchManualRoutingModule } from 'app/giphy/giphy-search-manual/giphy-search-manual-routing.module';


@NgModule({
  imports: [ ShareModule, GiphySearchListModule, GiphySearchManualRoutingModule ],
  exports: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
  declarations: [ GiphySearchManualComponent ]
})
export class GiphySearchManualModule { }
