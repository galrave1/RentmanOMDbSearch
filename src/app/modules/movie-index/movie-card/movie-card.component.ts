import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { OMDBSearchService } from '../../body/service/omdbsearch.service';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;
  showDetails: boolean = false;
  movieDetails: Movie | undefined;

  constructor(private searchService: OMDBSearchService) { }

  ngOnInit(): void {
    // console.log('movie',this.movie);
  }
  OpenMovieDetails() {
    if (!this.showDetails) {
      this.GetMovieDetails();
    } else {
      this.showDetails = !this.showDetails;
      this.movieDetails = undefined;
    }
  }
  GetMovieDetails() {
    this.searchService.GetMovieByImdbID(this.movie?.imdbID).subscribe(data => {
      this.movieDetails = data;
      this.showDetails = !this.showDetails;
    });
  }
  closeDetailsHander(close: boolean) {
    this.OpenMovieDetails();
  }
}
