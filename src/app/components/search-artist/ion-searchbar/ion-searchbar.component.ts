import { Component, OnInit } from '@angular/core';

import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.scss']
})
export class IonSearchbarComponent implements OnInit {

  searchValue: string = "";

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  onKeyUp(event:Event):void {
    this.search(event);
  }

  search(event:Event):void {
    event.preventDefault();
    this.artistService.getArtistByName(this.searchValue)
     .subscribe(res => {
       this.artistService.filterData(res);
     });
  }


}
