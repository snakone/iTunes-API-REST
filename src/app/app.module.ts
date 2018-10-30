import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Material Module
import { MaterialModule } from './modules/material.module';

// Toastr
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { AppContentComponent } from './components/layout/app-content/app-content.component';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { ArtistGridComponent } from './components/search-artist/artist-grid/artist-grid.component';
import { ArtistCardComponent } from './components/search-artist/artist-grid/artist-card/artist-card.component';
import { IonSearchbarComponent } from './components/search-artist/ion-searchbar/ion-searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AppContentComponent,
    SearchArtistComponent,
    ArtistGridComponent,
    ArtistCardComponent,
    IonSearchbarComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    MaterialModule, FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-top-left'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
