import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OMDBSearchService } from '../body/service/omdbsearch.service';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private searchService: OMDBSearchService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('MovieDetailsComponent', params);
      
      // if (params === undefined || params === null || params["searchTerm"] === undefined || params["searchTerm"] === null)
      //   this.router.navigate(['/home']);
      // this.SearchMovies(params["searchTerm"]);
    });

    const id = this.route.snapshot.paramMap.get('id');
    console.log('id',id);
    
  }

}
