import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean = false;
  
  constructor(
    private store: LocalStoreService,
    private router: Router
  ) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem('demo_login_status');
  }

  getuser() {
    return of({});
  }

  signin() {
    this.authenticated = true;
    this.store.setItem('demo_login_status', true);
  }
  signout() {
    this.authenticated = false;
    this.store.setItem('demo_login_status', false);
    this.router.navigateByUrl('/sessions/signin')
  }
}
