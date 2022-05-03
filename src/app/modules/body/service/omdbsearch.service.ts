import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { SearchModel } from 'src/app/Models/search-model';
import { Movie } from 'src/app/Models/movie';

@Injectable({
  providedIn: 'root'
})
export class OMDBSearchService {
  private baseUrl = `https://www.omdbapi.com?`;

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
  GetMovieByImdbID(imdbID?: string): Observable<Movie> {
    return this.http.get<Movie>(this.parseUrl(this.searchModel, undefined, imdbID));
  }

  private parseUrl(searchModel: SearchModel, term?: string, id?: string): string {
    searchModel.s = term;
    searchModel.i = id;
    let _url = this.baseUrl;
    for (const [key, value] of Object.entries(searchModel)) {
      if (value !== undefined && value !== null)
        _url += `&${key}=${value}`;
    }
    return _url;
  }

  private addMovies(movies?: Movie[]) {
    if (movies !== undefined && movies !== null)
      this.MoviesList = new BehaviorSubject([...this.MoviesList.value, ...movies]);
  }
  public get CurrentMoviesList(): Array<Movie> {
    return this.MoviesList.value;
  }
}
