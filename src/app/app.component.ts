import { Component } from '@angular/core';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogged: boolean = false;
  title = 'Dota Web Simulator';

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
    this.isLogged = this.authServ.isLoggedIn();
    `navbar loggedin says ->${this.isLogged}`
  }
}
