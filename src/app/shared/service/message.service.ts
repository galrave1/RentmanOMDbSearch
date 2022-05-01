import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchModel } from 'src/app/Models/search-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject: Subject<string> = new Subject<string>();

  SendMessage(searchTerm: string) {
    this.subject.next(searchTerm);
  }
  GetMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
