import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie:Movie;
  onWatchlist:boolean = false;
  watchlist:Movie[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.watchlist = this.getWatchlist();
    this.onWatchlist = this.isOnWatchlist();
  }

  isOnWatchlist():boolean {
    let isInWatchlist = false;
    if(this.watchlist?.length) {
      this.watchlist.forEach(movie => {
        if(movie.Title === this.movie.Title) isInWatchlist = true;
      });
    }
    return isInWatchlist;
  }

  getWatchlist(): Movie[] {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')!);
    return watchlist;
  }

  selectMovie() :void {
    localStorage.setItem('movie', JSON.stringify(this.movie));
    this.router.navigate(['/movie',this.movie.Title]);
  }

}
