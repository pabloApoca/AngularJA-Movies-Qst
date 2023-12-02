import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  @Input() movie:any;

  constructor() {}

  ngOnInit(): void {
  }
  

  imageRender(image:string) {
    return `bg-${image}`;
  }

  year(date:string) {
    return date.substr(-4);
  }
}
