import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from '../models/models';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})

export class DetailMovieComponent implements OnInit {
  
  movie:Movie|any = {};
  watchlist:Movie[] = [];
  sanitizer:string|any = {};
  movieUrl:string|any = {};

  constructor(protected _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.movie = this.getMovie();
    this.watchlist = this.getWatchlist();
    this.movieUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.TrailerLink);
  }

  inWatchlist() {
    let isInWatchlist = false;
    if(this.watchlist?.length) {
      this.watchlist.forEach(movie => {
        if(movie.Title === this.movie.Title) isInWatchlist = true;
      });
    }
    return isInWatchlist;
  }
  
  addWatchlist() {
    if(this.watchlist?.length) {
      let isInWatchlist = false;
      this.watchlist.forEach(movie => {
        if(movie.Title === this.movie.Title) isInWatchlist = true;
      });
      if(!isInWatchlist) this.watchlist.push(this.movie);
      if(isInWatchlist) this.removeraWatchlist(this.movie);
    } else {
      this.watchlist = [];
      this.watchlist.push(this.movie);
    }
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }

  removeraWatchlist(movieToDelete:any) :void{
    const position = this.watchlist.findIndex(movie => movie.Title === movieToDelete.Title);
    this.watchlist.splice(position, 1);
  }

  getWatchlist(): any | null {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')!);
    return watchlist;
  }

  getMovie(): object | null {
    const movie = JSON.parse(localStorage.getItem('movie')!);
    return movie;
  }
 
}
