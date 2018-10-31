import { Component, OnInit } from '@angular/core';

import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.scss']
})

export class IonSearchbarComponent implements OnInit {

  searchValue: string = "";

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  onKeyUp(event:Event):void {  // Trigger JS onkeyup Event
    this.search(event);
  }

  search(event:Event):void {
    event.preventDefault();
    this.artistService.getArtistByName(this.searchValue)
     .subscribe(res => {  // Once with the data, send it to the Observable Stream
       this.artistService.filterData(res);
     });
  }


}
