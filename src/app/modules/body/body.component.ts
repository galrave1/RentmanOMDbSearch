import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from '../../Models/search-model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SearchActionEmitted(searchModel: SearchModel) {
    console.log('SearchActionEmitted', searchModel);

    this.router.navigateByUrl('/dynamic', { state: searchModel });
  }
}
