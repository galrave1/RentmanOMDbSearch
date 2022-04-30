import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchModel } from 'src/app/Models/search-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject: Subject<SearchModel> = new Subject<SearchModel>();

  SendMessage(SearchData: SearchModel) {
    this.subject.next(SearchData);
  }
  GetMessage(): Observable<SearchModel> {
    return this.subject.asObservable();
  }
}
