
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ResumenCliente } from '../models/resumen-cliente.model';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResumenClienteService {
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

    getResumenCliente(): Observable<ResumenCliente[]> {
      return this.http.get<ResumenCliente[]>(this.baseurl + '/tramitanet/resumenCliente').pipe(
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
