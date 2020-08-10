import { Injectable } from '@angular/core';
import { Service } from '../Model/service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { Templates } from '../Model/templates.model';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  service: any = [];
  // private baseUrl="http://localhost:8080/all";
  private baseUrl="../assets/DATA/serviceList.json";

  constructor(private http: HttpClient) { }

  serviceList:Service[];
  templateList:Templates[];

  getServices(): Observable<Service[]>
  {
    //../assets/DATA/serviceList.json'
    return this.http.get<Service[]>(this.baseUrl).pipe(
      catchError(this.handleError));
  }

  getService(id: number): Observable<Service> {
    return this.getServices().pipe(
        map(service => service.filter(service => service.id === id)[0]));
  }

  getTemplates(): Observable<Templates[]>{
    return this.http.get<Templates[]>('../assets/DATA/templates.json').pipe(
      catchError(this.handleError));
  }

  getTemplateById(id: number): Observable<Templates>{
    return this.getTemplates().pipe(
      map(service => service.filter(template => template.templateId === id)[0]));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
