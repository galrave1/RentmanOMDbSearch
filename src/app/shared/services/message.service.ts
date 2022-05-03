import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from 'src/app/Models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject: Subject<Message> = new Subject<Message>();

  SendMessage(message: Message) {
    this.subject.next(message);
  }
  GetMessage(): Observable<Message> {
    return this.subject.asObservable();
  }
}
