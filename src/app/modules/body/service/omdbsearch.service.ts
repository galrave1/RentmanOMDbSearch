import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { SearchModel } from 'src/app/Models/search-model';

@Injectable({
  providedIn: 'root'
})
export class OMDBSearchService {
  private baseUrl = `https://www.omdbapi.com?`;
  MoviesSearchResult: Observable<OmdbSearchResult> | undefined;
  constructor(private http: HttpClient) { }

  SearchForMovies(searchModel: SearchModel): Observable<OmdbSearchResult> {
    return this.http.get<OmdbSearchResult>(this.parseUrl(searchModel)).pipe(
      tap((results: OmdbSearchResult) => {
        this.MoviesSearchResult = new BehaviorSubject(results);
      })
    );
  }

  getLastSearch(): Observable<OmdbSearchResult> {
    if (this.MoviesSearchResult instanceof Observable) {
      return this.MoviesSearchResult;
    }
    return new Observable<OmdbSearchResult>();
  }

  private parseUrl(searchModel: SearchModel): string {
    let _url = this.baseUrl;
    for (const [key, value] of Object.entries(searchModel)) {
      _url += `&${key}=${value}`;
    }
    return _url;
  }
}
