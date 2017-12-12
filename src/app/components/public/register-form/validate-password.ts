import {AbstractControl} from '@angular/forms'

export class ValidatePassword{

  static MatchPassword(AC: AbstractControl){
    let password1 = AC.get('inputPassword').value;
    let password2 = AC.get('confirmPassword').value;

    if(password1 !== password2){
      AC.get('confirmPassword').setErrors({MatchPassword: false})
    } else{
      return null
    }
  }
}
