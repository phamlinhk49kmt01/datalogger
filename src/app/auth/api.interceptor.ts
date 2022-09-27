import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('api') != -1 && request.url.indexOf('http') == -1) {
      const apiReq = request.clone({ url: `${environment.apiUrl}${request.url}` });
      return next.handle(apiReq);
    }
    return next.handle(request);
  }
}
