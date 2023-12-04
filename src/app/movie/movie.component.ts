import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movie:any;

  constructor(private router: Router) {}

  selectMovie() {
    localStorage.setItem('movie', JSON.stringify(this.movie));
    this.router.navigate(['/detail',this.movie.Title]);
  }

}
