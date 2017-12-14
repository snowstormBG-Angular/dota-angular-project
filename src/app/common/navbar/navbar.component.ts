import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
import {LoggedStateService} from "../../services/logged-state.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private router: Router,
              private loggedStateServ: LoggedStateService){}

  logout(): void{
    localStorage.removeItem('authtoken');
    this.loggedStateServ.emitChange(false);
    this.router.navigate(['/']);
  }
}
