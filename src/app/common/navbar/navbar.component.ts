import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
import {LoggedStateService} from "../../services/logged-state.service";
import {AuthenticationService} from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private router: Router,
              private loggedStateServ: LoggedStateService,
              private authService: AuthenticationService){}

  logout(): void{
    localStorage.removeItem('authtoken');
    // this.authService.logout();   //IT DOES NOTHING!
    this.loggedStateServ.emitChange(false);
    this.router.navigate(['/']);
  }
}
