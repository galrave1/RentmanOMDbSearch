import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pager } from 'src/app/interfaces/pager';
import { Movie } from 'src/app/Models/movie';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { OMDBSearchService } from '../body/service/omdbsearch.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {
  searchResponse: boolean = true;
  SearchResult: OmdbSearchResult = new OmdbSearchResult();
  pager:Pager;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: OMDBSearchService) { }

  ngOnInit(): void {
    console.log('MovieIndexComponent');

    this.route.queryParams.subscribe(params => {
      console.log(params["searchTerm"], params);
      if (params === undefined || params === null || params["searchTerm"] === undefined || params["searchTerm"] === null)
        this.router.navigate(['/home']);
      this.SearchMovies(params["searchTerm"]);
    });
  }

  SearchMovies(searchTerm: string) {
    this.searchService.SearchForMovies(searchTerm).subscribe(data => {
      this.searchResponse = data.Response.toLowerCase() === 'true';
      this.SearchResult = data;
    });
  }

  
}
