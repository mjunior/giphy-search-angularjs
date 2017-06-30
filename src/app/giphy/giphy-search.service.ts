import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GiphySearchService {

  constructor(private http: Http) { }

  searchGiphy(term, limit): Observable<Response> {
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=48d2127a49304bf5a2be11663bebae86&limit=' + limit;
    return this.http.get(url);
  }
}
