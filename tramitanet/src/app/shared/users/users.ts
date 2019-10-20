import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Users {
    active: any[] = [
        { username: 'admin3', email: 'admin@company.com', claveCliente: 'CLI0003', razonSocial: 'FORD MOTOR COMPANY', password: 'admin', role: 4, rolename: 'Administrador' },
        { username: 'admin2', email: 'admin@company.com', claveCliente: 'CLI0002', razonSocial: 'ALTER EGO MCX', password: 'admin', role: 4, rolename: 'Administrador' },
        { username: 'admin', email: 'admin@company.com', claveCliente: 'CLI0001', razonSocial: 'FEDRYL SA DE CV', password: 'admin', role: 4, rolename: 'Administrador' },
        { username: 'cliente', email: 'gm_motors@gmail.com', claveCliente: 'CLI0001', password: '   ', role: 1, rolename: 'Cliente' },
        { username: 'e.trejo', email: 'ernesto_trejo@hotmail.com', claveAnalista: 'ERNESTO', razonSocial: 'Ernesto Trejo Oviedo', password: 'e.trejo', role: 2, rolename: 'Analista' },
        { username: 'boni', email: 'j.m.r@hotmail.com', claveCapturista: 'BONI', razonSocial: 'Bonifacio Nuñez', password: 'boni', role: 3 },
        { username: 'j.hernandez', email: 'capturista2@gmail.com', claveCapturista: 'JAVIER', razonSocial: 'Javier Hernández', password: 'j.hernandez', role: 3, rolename: 'Capturista' },
        
        // se agregan usuarios de prueba
        { username: 'cliente', email: 'cliente', claveCliente: 'CLI0002', password: 'cliente', role: 1, rolename: 'Cliente' },
        { username: 'analista', email: 'analista', password: 'analista', role: 2, rolename: 'Analista' },
        { username: 'capturista', claveCapturista: "JESUS", email: 'capturista', password: 'capturista', role: 3, rolename: 'Capturista' },
    ];
}
