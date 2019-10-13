
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Proforma } from '../models/proforma';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProformaService {
    baseurl = 'http://localhost:8080';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
           'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
        })
    };

    constructor(
      private http: HttpClient
    ) { }

    getProformas(): Observable<Proforma[]> {
      return this.http.get<Proforma[]>(this.baseurl + '/tramitanet/proformas').pipe(
          retry(1), catchError(this.errorHandler)
      );
    }

    // Error handling
    errorHandler ( error ) {
        let errorMessage = '';
        if ( error.error instanceof ErrorEvent ) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
