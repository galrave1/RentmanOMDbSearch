import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie:Movie | undefined;

  ngOnInit(): void {
    console.log('movie',this.movie);    
  }
}
