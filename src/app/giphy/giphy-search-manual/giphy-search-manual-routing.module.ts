import { GiphySearchManualComponent } from 'app/giphy/giphy-search-manual/giphy-search-manual.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: GiphySearchManualComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiphySearchManualRoutingModule { }
