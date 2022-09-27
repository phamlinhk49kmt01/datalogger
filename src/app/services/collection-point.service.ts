import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionPointService {

  constructor(private http: HttpClient) { }

  getListsCollectionPoint(param: any): Observable<any> {
    return this.http.post('api/v1/collection-point/get-list', param);
  }
}
