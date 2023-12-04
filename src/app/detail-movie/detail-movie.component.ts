import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})

export class DetailMovieComponent implements OnInit {
  
  movie:object|any = {};
  sanitizer:string|any = {};

  constructor(protected _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.movie = this.getMovie();
  }

  videoURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.TrailerLink);
  }

  getMovie(): object | null {
    const movie = JSON.parse(localStorage.getItem('movie')!);
    console.log(movie.TrailerLink);
    return movie;
  }
}
