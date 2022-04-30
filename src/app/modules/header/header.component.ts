import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/shared/service/message.service';
import { SearchModel } from 'src/app/Models/search-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchModel: SearchModel = new SearchModel();
  @ViewChild(NgForm) searchForm!: NgForm;

  constructor(private messageService: MessageService) { }

  onSubmit() {
    if (this.searchForm.valid) {
      this.messageService.SendMessage(this.searchModel);
      this.searchModel.s = undefined;
    } else {
      this.searchForm.form.markAllAsTouched();
    }
  }

}
