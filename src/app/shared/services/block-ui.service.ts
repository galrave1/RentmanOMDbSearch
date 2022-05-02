import { Injectable } from '@angular/core';
import { defer, NEVER } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
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
      // console.log('StartBlock');
      this.messageService.SendMessage('start');
    });


    Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        hasBackdrop: true,
      });
      this.overlayRef.attach(new ComponentPortal(BlockUIComponent));
    });


  }

  public hide(): void {
    console.log('StopBlock');
    this.messageService.SendMessage('end');
  }
}
