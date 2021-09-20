import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  url:string="";

  onShow(){
    return this.http.get(this.url).pipe(catchError(this.errorHandler),
    retry(3));
  }
  errorHandler(errorHandler:HttpErrorResponse){
    console.log(errorHandler);
    return throwError(errorHandler.message || 'server is not available');
  }
}
