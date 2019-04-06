import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class AlreadyAuthenticatedGuard implements CanActivate {
    constructor(private userService:UserService,private router:Router){

    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('inside already authenticated guard')
      if (this.userService.isAuthenticated()) {
        console.log('authenticated')

          console.log('navigating to dashboard')
          this.router.navigate(['/dashboard']);
          return false;

      }
      console.log('not authenticated')

      return true;
    }
}
