import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor( private router:Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(
          (err:HttpErrorResponse) => {
              console.log(err.status);
              if(err.status === 401) {
                  this.router.navigate(['/login']);
              } else if(err.status === 403) {
                  this.router.navigate(['/forbidden']);
              }
              return throwError("Some thing is wrong");
          }
      )
  );
  }
}
