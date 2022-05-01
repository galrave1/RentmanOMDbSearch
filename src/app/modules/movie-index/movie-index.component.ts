import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Movie } from 'src/app/Models/movie';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { SearchModel } from 'src/app/Models/search-model';
import { MessageService } from 'src/app/shared/service/message.service';
import { OMDBSearchService } from '../body/service/omdbsearch.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {
  @Input() results:Array<Movie>;

  ngOnInit(): void {
  console.log('this.results',this.results);
  
  }

}
