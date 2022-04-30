import { Component, Output, EventEmitter, OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchModel } from '../../Models/search-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchModel: SearchModel = new SearchModel();
  @Output("SearchEmitter") SearchEmitter = new EventEmitter<SearchModel>();
  @ViewChild(NgForm) searchForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
    console.log(this.searchModel);

  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.SearchEmitter.emit(this.searchModel);
    } else {
      this.searchForm.form.markAllAsTouched();
    }
  }

}
