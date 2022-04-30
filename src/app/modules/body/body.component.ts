import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OmdbSearchResult } from 'src/app/Models/omdb-search-result';
import { SearchModel } from 'src/app/Models/search-model';
import { MessageService } from 'src/app/shared/service/message.service';
import { OMDBSearchService } from './service/omdbsearch.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(private searchService: OMDBSearchService, private messageService: MessageService, private router: Router) { }
  ngOnInit(): void {
    this.subscriptions.push(this.messageService.GetMessage().subscribe(searchModel => {
      this.SearchActionEmitted(searchModel);
    }));
  }

  SearchActionEmitted(searchModel: SearchModel) {
    this.searchService.SearchForMovies(searchModel).subscribe(data => {
      console.log('SearchActionEmitted', data.Response, data.Response == true, data.Response === true);
      if (data.Response === 'True')
        this.router.navigateByUrl('/search-resulst', { state: { user: 'user', foo: 'bar' } });
      // this.router.navigate(['/search-resulst', data])
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
