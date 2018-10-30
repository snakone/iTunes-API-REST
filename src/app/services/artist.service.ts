import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Artist } from 'src/app/models/artist';

import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  readonly URL_API = 'https://itunes.apple.com/search?term=';
  filteredData = new Subject<any>();
  totalLikes: number = 0;

  constructor(private http: HttpClient) { }

  getArtistByName(searchValue: string){
    return this.http.get(this.URL_API + searchValue)
    .pipe(map (data => {
    return data['results'].map(p => {
        return new Artist (p.trackName, p.collectionName, p.artworkUrl100)
      });
    }));
  }

  filterData(data):void {
    this.filteredData.next(data);
  }

}
