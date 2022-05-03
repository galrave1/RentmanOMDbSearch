/*show and start ant search*/

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string  = '';
  @ViewChild(NgForm) searchForm!: NgForm;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.searchForm.valid) {
      this.router.navigate(
        ['search-movies'],
        { queryParams: { searchTerm: this.searchTerm } }
      ).then(()=>{
        this.searchTerm = '';
      });

    } else {
      this.searchForm.form.markAllAsTouched();
    }
  }

}
