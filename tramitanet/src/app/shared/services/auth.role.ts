import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RoleEnum } from '../enums/role.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this._authService.decode();
    if ( user && user.role === RoleEnum.Administrador) {
      return true;
    }
    const roles: any[] = next.data.roles;
    for ( let role of roles ) {
      if (user && user.role === role) {
        return true;
      }
    }

    // navigate to not found page
    //this._authService.signout();
    return false;
  }
}
