import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ValidatePassword} from './validate-password';


@Component({
  templateUrl:'./register.component.html',
  styleUrls:['./../landing-page/landing-page.component.css']
})
export class RegisterComponent{
  public register: FormGroup;

  constructor(private fb: FormBuilder) {

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
}
