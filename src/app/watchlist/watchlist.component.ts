import { Component } from '@angular/core';
import { ServiceMoviesService } from '../service-movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  watchlist:any[] = [];

  constructor(private service:ServiceMoviesService) {}


  ngOnInit() {
    this.watchlist = this.getWatchlist();
    this.service.deleteMovie.subscribe( data => {
      const position = this.watchlist.findIndex(movie => movie.Title === data.data.Title);
      this.watchlist.splice(position, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
    })
  }

  getWatchlist(): any | null {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')!);
    return watchlist;
  }
}
