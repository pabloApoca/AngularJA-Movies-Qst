import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWatchlistComponent } from './movie-watchlist.component';

describe('MovieWatchlistComponent', () => {
  let component: MovieWatchlistComponent;
  let fixture: ComponentFixture<MovieWatchlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieWatchlistComponent]
    });
    fixture = TestBed.createComponent(MovieWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
