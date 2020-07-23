import { Injectable } from '@angular/core';
import { Service } from '../Model/service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  service: any = [];

  constructor(private http: HttpClient) { }

  serviceList:Service[];

  getServices(): Observable<Service[]>{
    return this.http.get<Service[]>('../assets/DATA/serviceList.json').pipe(
      catchError(this.handleError));
  }

  getService(id: number): Observable<Service> {
    return this.getServices().pipe(
        map(service => service.filter(service => service.id === id)[0]));
}

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
}
}
