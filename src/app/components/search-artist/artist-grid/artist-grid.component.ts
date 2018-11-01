import { Component, OnInit } from '@angular/core';

import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'artist-grid',
  templateUrl: './artist-grid.component.html',
  styleUrls: ['./artist-grid.component.scss']
})

export class ArtistGridComponent implements OnInit {

  artistList: Artist[];
  searchValue: string;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.filterList();
  }

  filterList():void {
    this.artistService.filteredData  // Get the data from the Observable Stream
      .subscribe(res => {
      this.artistList = res as Artist[];
    });
  }

}
