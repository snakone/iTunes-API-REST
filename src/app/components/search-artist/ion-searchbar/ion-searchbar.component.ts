import { Component, OnInit } from '@angular/core';

import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/models/artist';

import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';  // Debounce Function

@Component({
  selector: 'ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.scss']
})

export class IonSearchbarComponent implements OnInit {

  searchValue = new FormControl();

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  onKeyUp():void {  // Trigger JS onkeyup Event
    this.searchValue.valueChanges
     .pipe(debounceTime(2000))  // Debounce Form Control Value Changes every 2s
      .subscribe(value => this.search(value))
  }

  search(value:string):void {
    this.artistService.getArtistByName(value)
     .subscribe(res => {  // Once with the data, send it to the Observable Stream
       this.artistService.filterData(res as Artist[]);
     });
  }


}
