import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiHttpClient extends HttpClient {
  public baseUrl: string;

  public constructor(handler: HttpHandler) {
    super(handler);

    this.baseUrl = '/api/';
  }

  public get(url: string, options?: Object): Observable<any> {
    url = this.baseUrl + url;
    return super.get(url, options);
  }
}