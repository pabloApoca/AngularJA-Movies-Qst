import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMoviesService {
  
  @Output() deleteMovie: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
