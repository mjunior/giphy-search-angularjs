import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchListComponent } from 'app/giphy/giphy-search-list/giphy-search-list.component';

@NgModule({
  imports: [ ShareModule ],
  declarations: [ GiphySearchListComponent ],
  exports: [ GiphySearchListComponent ]
})
export class GiphySearchListModule { }
