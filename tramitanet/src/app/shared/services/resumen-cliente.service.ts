
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ResumenCliente } from '../models/resumen-cliente.model';
import { catchError, retry } from 'rxjs/operators';
import { Proforma } from '../models/proforma';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResumenClienteService {
    baseurl = environment.base_api_url;

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
    getResumenCliente(clave:string, fecha:string): Observable<ResumenCliente[]> {
      return this.http.get<ResumenCliente[]>(this.baseurl + '/tramitanet/proformas/cliente/' + clave + '/resumen/' + fecha).pipe(
          retry(1), catchError(this.errorHandler)
      );
    }

    getResumenClienteFechaBusqueda(clave: string, fecha: string): Observable<any>{
        return this.http.get<any>(this.baseurl + '/tramitanet/proformas/cliente/' + clave + '/referencias/' + fecha).pipe(
            retry(1), catchError(this.errorHandler)
        );
    }

    getFindTramitesByReferenciaAndFechaIngreso(fecha: string, clave: string, numReferencia: string): Observable<Proforma[]> {
        // tslint:disable-next-line: max-line-length
        return this.http.get<Proforma[]>(this.baseurl + '/tramitanet/proformas/cliente/' + clave + '/referencia/' + numReferencia + '/' + fecha).pipe(
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
