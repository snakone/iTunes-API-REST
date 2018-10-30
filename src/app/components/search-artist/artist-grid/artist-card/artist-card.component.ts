import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist';

import { ToastrService } from 'ngx-toastr';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})

export class ArtistCardComponent implements OnInit {

  @Input() artist: Artist;
  totalLikes: number = 0;

  constructor(private toastr: ToastrService,
              private artistService: ArtistService) { }

  ngOnInit() {
  }

  doLike(artist: Artist){
    this.artist.like = !this.artist.like;
    this.checkLike(artist, this.artist.like);
  }

  checkLike(artist: Artist, like: boolean) {
    if (like) {
      this.toastr.success(`${artist.song}`, 'Canción añadida!');
      this.artistService.totalLikes++
    }
    else {
      this.toastr.error(`${artist.song}`, 'Canción eliminada!');
        this.artistService.totalLikes--
    }
  }

}
