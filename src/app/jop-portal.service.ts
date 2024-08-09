import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Datatype } from './datatype';
  


  @Injectable({providedIn: 'root'})
  export class JopPortalService 
   {


    private url = "http://localhost:3000/users"
    private url2 = "http://localhost:3000/jobListings"

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
    constructor(private httpClient: HttpClient) { }
  

    Registruser(user:Datatype):Observable<any>{
      return this.httpClient.post(this.url , JSON.stringify(user) ,this.httpOptions)
      .pipe(catchError(this.errorHandler))
       }

       GetAllUser():Observable<any>{
        return this.httpClient.get(this.url)
        .pipe(catchError(this.errorHandler))
         }

    GetjobListing():Observable<any>{
      return this.httpClient.get(this.url2)
      .pipe(catchError(this.errorHandler))
       }



  errorHandler(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}

  }

