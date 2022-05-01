import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pager } from 'src/app/Models/pager';
import { Movie } from 'src/app/Models/movie';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() movies: Array<Movie> = new Array<Movie>();
  @Output() changePage = new EventEmitter<number>(true);
  pager:Pager = new Pager();
  // constructor() { }

  ngOnInit(): void {
    this.pager = new Pager(1,);
  }

}
