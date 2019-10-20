import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Users {
    active: any[] = [
        { username: 'admin3', email: 'admin@company.com', claveCliente: 'CLI0003', razonSocial: 'FORD MOTOR COMPANY', password: 'admin', role: 4 },
        { username: 'admin2', email: 'admin@company.com', claveCliente: 'CLI0002', razonSocial: 'ALTER EGO MCX', password: 'admin', role: 4 },
        { username: 'admin', email: 'admin@company.com', claveCliente: 'CLI0001', razonSocial: 'FEDRYL SA DE CV', password: 'admin', role: 4 },
        { username: 'cliente', email: 'gm_motors@gmail.com', claveCliente: 'CLI0001', password: '   ', role: 1 },
        { username: 'analista', email: 'ernesto_trejo@hotmail.com', password: '4n4l1st4', role: 2 },
        { username: 'boni', email: 'j.m.r@hotmail.com', claveCapturista: 'BONI', password: 'boni', role: 3 },
        { username: 'capturista2', email: 'capturista2@gmail.com', claveCapturista: 'JAVIER', password: 'capturista2', role: 3 },
        
        // se agregan usuarios de prueba
        { username: 'cliente', email: 'cliente', claveCliente: 'CLI0002', password: 'cliente', role: 1 },
        { username: 'analista', email: 'analista', password: 'analista', role: 2 },
        { username: 'capturista', claveCapturista: "JESUS", email: 'capturista', password: 'capturista', role: 3 },
    ];
}
