import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Users {
    active: any[] = [
        { username: 'cliente', email: 'gm_motors@gmail.com', password: 'cl13nt3', rol: 1 },
        { username: 'analista', email: 'ernesto_trejo@hotmail.com', password: '4n4l1st4', rol: 2 },
        { username: 'capturista', email: 'j.m.r@hotmail.com', password: 'c4ptur1st4', rol: 3 },
    ];
}
