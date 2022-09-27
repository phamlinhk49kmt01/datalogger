import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.headers.get('No-Auth') === 'True' || req.url.indexOf('https://maps.googleapis.com') != -1) {
      return next.handle(req.clone());
    }


    const token = localStorage.getItem("token") || '';

    req = this.addToken(req, token);

    return next.handle(req);
  }


  private addToken(request: HttpRequest<any>, token: string) {

    return request.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}