import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Artist } from 'src/app/models/artist';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'  // Accesible within all application
})

export class ArtistService {

  readonly URL_API = 'https://itunes.apple.com/search?term=';
  filteredData = new Subject<any>();  // Observable Artist List
  totalLikes: number = 0;

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  getArtistByName(searchValue: string):Observable<any> {
    return this.http.get(this.URL_API + searchValue)
    .pipe(map (data => {  // Map the Result
      return data['results'].map(p => {  // Inside Result We only need this INFO
        return new Artist (p.trackName,  // Song
                           p.collectionName, // Album
                           p.artworkUrl100)  // Picture
          });
      }));  // End of Pipe
  }

  filterData(data):void {  // Send data into Observable Stream
    this.filteredData.next(data);
  }

  checkLike(artist: Artist, like: boolean):void {  // Artist to diplay Song's name
    if (like) {
       this.totalLikes++
       this.toastr.success(`${artist.song}`, 'Canción añadida!');
    } else {
       this.totalLikes--
       this.toastr.error(`${artist.song}`, 'Canción eliminada!');
    }
  }

}
