import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
