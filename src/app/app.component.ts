import { Component } from '@angular/core';
import { AuthenticationService } from './services/auth.service';
import {LoggedStateService} from "./services/logged-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogged: boolean = false;
  title = 'Dota Web Simulator';

  constructor(private authServ: AuthenticationService,
              private loggedStateServ: LoggedStateService
  ) {
    loggedStateServ.changeEmitted$.subscribe(
      state => {
        this.isLogged= state;
      });
  }

  ngOnInit() {
    this.isLogged = this.authServ.isLoggedIn();
  }
}
