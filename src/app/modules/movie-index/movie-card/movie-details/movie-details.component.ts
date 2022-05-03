import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie:Movie | undefined;

  ngOnInit(): void {
    console.log('MovieDetailsComponent',this.movie);
  }
  CloseMovieDetails():void{

  }
}
