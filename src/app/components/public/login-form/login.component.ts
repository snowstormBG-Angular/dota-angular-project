import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {LoginModel} from '../../../services/models/login.model';
import {AuthenticationService} from '../../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../landing-page/landing-page.component.css']
})
export class LoginComponent implements OnInit {
  public model: LoginModel;
  public login: FormGroup;
  public loginFail: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) {
    this.model = new LoginModel("", "");
  }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(formData) : void {
    this.model.username = formData.value.username;
    this.model.password = formData.value.password;
    this.authService.login(this.model)
      .subscribe(
        data => {
          this.successfulLogin(data);
          console.log("successful login");
        },
        err => {
          this.loginFail = true;
        }
      )
  }

  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.loginFail = false;
    this.router.navigate(['/']);
  }

  loginFailNotify() : void {
    this.loginFail = true;
  }
}
