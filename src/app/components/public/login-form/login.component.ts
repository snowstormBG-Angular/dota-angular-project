import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../landing-page/landing-page.component.css']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public loginFail: boolean= false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.login = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(data){
    console.log(data);
    this.loginFailNotify()
  }
  loginFailNotify(){
    this.loginFail = true;
  }
}
