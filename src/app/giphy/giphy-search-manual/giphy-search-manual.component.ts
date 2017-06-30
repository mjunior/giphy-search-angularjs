import { Giphy } from './../giphy.type';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from 'app/giphy/giphy-search.service';

@Component({
  selector: 'app-giphy-search-manual',
  templateUrl: './giphy-search-manual.component.html'
})
export class GiphySearchManualComponent implements OnInit {
  gifs: Giphy[] = []
  limit: String;
  term: String;

  constructor(private giphySearchService: GiphySearchService) { }

  ngOnInit() {
  }

  searchGif() {
    this.giphySearchService.searchGiphy(this.term, this.limit)
                           .subscribe((response: Response) => {
                              this.gifs = response.json().data;
                           });
  }

}
