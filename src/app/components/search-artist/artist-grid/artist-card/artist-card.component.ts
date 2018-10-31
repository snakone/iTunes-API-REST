import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist';

import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})

export class ArtistCardComponent implements OnInit {

  @Input() artist: Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  doLike(artist: Artist):void {
   // Swap Like value and check which value it's the new one
    this.artist.like = !this.artist.like;
    this.artistService.checkLike(artist, this.artist.like);
  }

}
