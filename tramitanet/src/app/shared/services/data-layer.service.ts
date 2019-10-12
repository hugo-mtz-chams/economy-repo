import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  constructor(
    private http: HttpClient
  ) { }



  getMails() {
    return this.http.get<any[]>('/api/mails');
  }
  getCountries() {
    return this.http.get<any[]>('/api/countries');
  }
  getProducts() {
    return this.http.get<any[]>('api/products');
  }
}
