import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        // retry(0),
        catchError(err => {
          return this.handleErrorResponse(err);
        })
      )
  }

  private handleErrorResponse(ErrorResponse: HttpErrorResponse): Observable<never> {
    switch (ErrorResponse.status) {
      case 401:
        this.router.navigate(['/Home']);
        return throwError('Unauthorized');
        break;
      case 2:
        this.router.navigate(['/Home']);
        return throwError('Unauthorized');
        break;
    }

    let errorMessage = '';
    if (ErrorResponse.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${ErrorResponse.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${ErrorResponse.status}\nMessage: ${ErrorResponse.message}`;
    }

    return throwError(errorMessage);
  }
}
