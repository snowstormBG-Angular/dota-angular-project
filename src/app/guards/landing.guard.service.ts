import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../services/auth.service";

@Injectable()
export class LandingGuard implements CanActivate {
  constructor(private authService : AuthenticationService,private router : Router){  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let amLoggedIn = localStorage.getItem('authtoken');
    // let amLoggedIn: boolean = this.authService.isLoggedIn();
    // console.log(`amloggedin -> ${amLoggedIn}`);

    if(amLoggedIn){
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
