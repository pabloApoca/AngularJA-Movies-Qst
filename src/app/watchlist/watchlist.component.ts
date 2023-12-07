import { Component } from '@angular/core';
import { ServiceMoviesService } from '../service-movies.service';
import { Movie } from '../models/models';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  watchlist:Movie[] = [];

  constructor(private service:ServiceMoviesService) {}

  ngOnInit() {
    this.watchlist = this.getWatchlist();
    this.service.deleteMovie.subscribe( data => {
      const position = this.watchlist.findIndex(movie => movie.Title === data.Title);
      this.watchlist.splice(position, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
      console.log(this.watchlist)
    })
  }

  getWatchlist(): Movie[] {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')!);
    return watchlist;
  }
}
