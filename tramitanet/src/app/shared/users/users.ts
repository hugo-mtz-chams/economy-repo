import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Users {
    active: any[] = [
        { username: 'admin', email: 'admin@company.com', claveCliente: '', password: 'admin', role: 4 },
        { username: 'cliente', email: 'gm_motors@gmail.com', claveCliente: 'CLI0001', password: 'cl13nt3', role: 1 },
        { username: 'analista', email: 'ernesto_trejo@hotmail.com', password: '4n4l1st4', role: 2 },
        { username: 'capturista', email: 'j.m.r@hotmail.com', password: 'c4ptur1st4', role: 3 },
    ];
}
