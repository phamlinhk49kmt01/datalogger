import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListDataloggerRequest } from '../models/requests/get-list-datalogger-request';

@Injectable({
  providedIn: 'root'
})

export class DataloggerService {

  constructor(private http: HttpClient) { }

  getAllDatalogger(param: GetListDataloggerRequest): Observable<any> {
    return this.http.post('api/v1/datalogger/get-list', param);
  }
}
