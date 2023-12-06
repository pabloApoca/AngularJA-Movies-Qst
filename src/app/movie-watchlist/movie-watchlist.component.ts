import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceMoviesService } from '../service-movies.service';
import { Movie } from '../models/models';

@Component({
  selector: 'app-movie-watchlist',
  templateUrl: './movie-watchlist.component.html',
  styleUrls: ['./movie-watchlist.component.css']
})
export class MovieWatchlistComponent {

  @Input() movie:Movie;
  
  onWatchlist:boolean = false;
  watchlist:Movie[] = [];

  constructor(private router: Router, private service:ServiceMoviesService) {}

  ngOnInit() {
    this.watchlist = this.getWatchlist();
    this.onWatchlist = this.isOnWatchlist();
  }

  removeraWatchlist():void {
    this.service.deleteMovie.emit({data: this.movie})
  }

  isOnWatchlist() :boolean {
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
