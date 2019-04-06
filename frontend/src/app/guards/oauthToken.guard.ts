import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";

// this guard is used to get the jwt token from oauth signin
// when you signin with oauth ,sever will redirect to dashbaord url with token as a query parameter
@Injectable()
export class OauthTokenGuard implements CanActivate {
    constructor(private userService:UserService,private router:Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(route.queryParams.token){
       this.userService.saveToken(route.queryParams.token)
       this.router.navigate(['/dashboard']);
     }
      return true;

    }
}
