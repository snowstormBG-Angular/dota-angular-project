import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ValidatePassword} from './validate-password';
import {AuthenticationService} from '../../../services/auth.service';
import {RegisterModel} from '../../../services/models/register.model';
import {Router} from '@angular/router';


@Component({
  templateUrl:'./register.component.html',
  styleUrls:['./../landing-page/landing-page.component.css']
})
export class RegisterComponent{
  public register: FormGroup;
  public model: RegisterModel;
  public registeredUser : string;
  public registerSuccess : boolean;
  public registerFail : boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.model = new RegisterModel("", "", "", "");
  }

  ngOnInit(): void {
    this.register = this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      auth: this.fb.group({
        inputPassword:['',[Validators.required]],
        confirmPassword:['',[Validators.required]],
      },{
        validator:ValidatePassword.MatchPassword
      }),
      creditCard:['',[]]
    })
  }

  onSubmit(data){
    console.log(data);
  }

  registerSubmit(formData) : void {
    //console.log(formData);
    this.model.username = formData.value.username;
    this.model.password = formData.value.auth.inputPassword;
    this.model.email = formData.value.email;
    this.model.creditCard = formData.value.creditCard;
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.successfulRegister(data);
        },
        err => {
          this.registerFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }

  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.registeredUser = data['username'];
    this.router.navigate(['/login']);
  }
}
