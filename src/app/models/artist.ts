export class Artist {
    song: string;
    album: string;
    image: string;
    like: boolean;

    constructor(song: string, album: string,
                picture: string, like: boolean = false){  // Default Value
    this.song = song;
    this.album = album;
    this.image = picture;
    this.like = like;
  }
}
