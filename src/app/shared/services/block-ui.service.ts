import { Injectable } from '@angular/core';
import { defer, NEVER } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {
  // @BlockUI() blockUI: NgBlockUI;
  constructor() {
   
    // this.blockUI.start('Loading...'); // Start blocking
 
    // setTimeout(() => {
    //   this.blockUI.stop(); // Stop blocking
    // }, 2000);
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
    // // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
    // Promise.resolve(null).then(() => {
    //   this.overlayRef = this.overlay.create({
    //     positionStrategy: this.overlay
    //       .position()
    //       .global()
    //       .centerHorizontally()
    //       .centerVertically(),
    //     hasBackdrop: true,
    //   });
    //   this.overlayRef.attach(new ComponentPortal(BlockUIComponent));
    // });
  }

  public hide(): void {
    // this.overlayRef.detach();
    // this.overlayRef = undefined;
  }
}
