import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent implements OnInit {

  constructor(public artistService: ArtistService) { }
  // Public Service because We use it on the HTML - Production
  ngOnInit() {
  }

}
