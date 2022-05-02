import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { delay, Observable, Subscription } from 'rxjs';
import { BlockUIService } from 'src/app/shared/services/block-ui.service';

@Injectable()
export class BlockUIInterceptor implements HttpInterceptor {

  constructor(private blockUIService:BlockUIService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const spinnerSubscription: Subscription = this.blockUIService.spinner$.subscribe();
    return next.handle(request);//.pipe(delay(12000));
  }
}
