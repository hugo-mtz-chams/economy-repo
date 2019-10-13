import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Users } from '../users/users';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean = false;

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private users: Users
  ) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem('isAuthenticated');
  }

  getuser() {
    return of({});
  }

  signin(jsecurityForm: FormGroup) {

    const loggedUser: any[] = this.users.active.filter( user => {
      if ( user.username === jsecurityForm.controls.email.value  &&
          user.password === jsecurityForm.controls.password.value
          || user.email === jsecurityForm.controls.email.value  &&
          user.password === jsecurityForm.controls.password.value ) {
        return user;
      }
    });
    if ( loggedUser.length > 0 ) {
      this.authenticated = true;
      this.store.setItem('isAuthenticated', true);
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
  signout() {
    this.authenticated = false;
    this.store.setItem('isAuthenticated', false);
    this.router.navigateByUrl('/sessions/signin');
  }
}
