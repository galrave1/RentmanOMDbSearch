/*service to implement `BlockUi on any HTTP request`*/

import { Injectable } from '@angular/core';
import { defer, NEVER } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { Message } from 'src/app/Models/message';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {
  
  constructor(private messageService:MessageService) {
  }

  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());

  public show(): void {
    Promise.resolve(null).then(() => {
      this.messageService.SendMessage(new Message(undefined, true));
    });
  }
  public hide(): void {
    Promise.resolve(null).then(() => {
      this.messageService.SendMessage(new Message(undefined, false));
    });
  }
}
