import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() movie: Movie | undefined;
  @Output() closeDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

  CloseMovieDetails(): void {
    this.closeDetails.emit(false);
  }
}
