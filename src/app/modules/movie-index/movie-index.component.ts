import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { OMDBSearchService } from '../body/service/omdbsearch.service';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {
  searchResponse: boolean = true;
  SearchResult: OmdbSearchResult = new OmdbSearchResult();
  searchTerm: string = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: OMDBSearchService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params === undefined || params === null || params["searchTerm"] === undefined || params["searchTerm"] === null)
        this.router.navigate(['/home']);
      this.searchTerm = params["searchTerm"];
      this.SearchMovies();
    });
  }

  SearchMovies(): void {
    this.searchService.SearchForMovies(this.searchTerm).subscribe(data => {
      this.searchResponse = data.Response.toLowerCase() === 'true';
      this.SearchResult = data;
    }
      // ,(catchError) => {
      //     console.log(catchError);
      //   }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    console.log('onTableDataChange', this.page * this.tableSize, this.count);
    if (this.page * this.tableSize >= this.count) {
      this.searchService.GetNextPage(this.searchTerm).subscribe(data => {
        this.searchResponse = data.Response.toLowerCase() === 'true';
        this.SearchResult = data;
      }
        // ,(catchError) => {
        //     console.log(catchError);
        //   }
      );
    }
  }

  get pageMovies(): Movie[] {
    let items = this.searchService.CurrentMoviesList;
    this.count = items.length;
    return items;
  }

}
