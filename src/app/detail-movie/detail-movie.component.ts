import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})

export class DetailMovieComponent implements OnInit {
  
  movie:object|any = {};
  watchlist: any[] = [];
  sanitizer:string|any = {};

  constructor(protected _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.movie = this.getMovie();
    this.watchlist = this.getWatchlist();
  }

  inWatchlist() {
    let isInWatchlist = false;
    this.watchlist.forEach(movie => {
      if(movie.Title === this.movie.Title) isInWatchlist = true;
    });

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


  removeraWatchlist(movieToDelete:any) {
    const position = this.watchlist.findIndex(movie => movie.Title === movieToDelete.Title);
    this.watchlist.splice(position, 1);
  }

  getWatchlist(): any | null {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')!);
    return watchlist;
  }

  videoURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.TrailerLink);
  }

  getMovie(): object | null {
    const movie = JSON.parse(localStorage.getItem('movie')!);
    return movie;
  }
 
}
