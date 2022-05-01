import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { SearchModel } from 'src/app/Models/search-model';
import { Movie } from 'src/app/Models/movie';

@Injectable({
  providedIn: 'root'
})
export class OMDBSearchService {
  private baseUrl = `https://www.omdbapi.com?`;
  private allMovies:Array<Movie> | undefined;

  searchModel: SearchModel = new SearchModel();
  MoviesSearchResult: Observable<OmdbSearchResult> | undefined;
  MoviesList: BehaviorSubject<Array<Movie>>;
  constructor(private http: HttpClient) {
    this.MoviesList = new BehaviorSubject(new Array<Movie>());
   }

  SearchForMovies(term: string): Observable<OmdbSearchResult> {
    return this.http.get<OmdbSearchResult>(this.parseUrl(this.searchModel, term)).pipe(
      tap((results: OmdbSearchResult) => {        
        this.MoviesSearchResult = new BehaviorSubject(results);
        this.addMovies(results.Search);
      })
    );
  }

  getLastSearch(): Observable<OmdbSearchResult> {
    if (this.MoviesSearchResult instanceof Observable) {
      return this.MoviesSearchResult;
    }
    return new Observable<OmdbSearchResult>();
  }

  private parseUrl(searchModel: SearchModel, term: string): string {
    searchModel.s = term;
    let _url = this.baseUrl;
    for (const [key, value] of Object.entries(searchModel)) {
      _url += `&${key}=${value}`;
    }
    return _url;
  }

  private addMovies(movies:Movie[]){
    this.MoviesList = new BehaviorSubject([...this.MoviesList.value, ...movies]);    
  }
  public get CurrentMoviesList(): Array<Movie> {
    return this.MoviesList.value;
  }
}
