import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  subscriptions: Subscription[] = [];
  
  constructor(private activatedRoute: ActivatedRoute,private searchService: OMDBSearchService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    // this.subscriptions.push(this.messageService.GetMessage().subscribe(searchModel => {
    //   // this.SearchActionEmitted(searchModel);
    //   console.log('GetMessage', searchModel);
      
    // }));

    console.log('ngOnInit');

    this.activatedRoute.data.subscribe(data => {
      console.log('activatedRoute', data);
    });
  }

  SearchActionEmitted(searchModel: SearchModel) {
    this.searchService.SearchForMovies(searchModel).subscribe(data => {
      console.log('SearchForMovies', data);
      
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
