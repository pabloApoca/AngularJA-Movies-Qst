import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-watchlist',
  templateUrl: './movie-watchlist.component.html',
  styleUrls: ['./movie-watchlist.component.css']
})
export class MovieWatchlistComponent {

  @Input() movie:any;
  onWatchlist:boolean|any = {};
  watchlist:any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.watchlist = this.getWatchlist();
    this.onWatchlist = this.isOnWatchlist();
  }

  isOnWatchlist() {
    let isInWatchlist = false;
    if(this.watchlist?.length) {
      this.watchlist.forEach(movie => {
        if(movie.Title === this.movie.Title) isInWatchlist = true;
      });
    }
    return isInWatchlist;
  }

  getWatchlist(): any | null {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')!);
    return watchlist;
  }

  selectMovie() {
    localStorage.setItem('movie', JSON.stringify(this.movie));
    this.router.navigate(['/movie',this.movie.Title]);
  }

}
