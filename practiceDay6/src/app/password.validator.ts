import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control:AbstractControl):{[key:string]:boolean}{
    let password=control.get('password');
    let confirmPassword=control.get('confirmPassword');
    console.log(password);
    if(password.pristine || confirmPassword.pristine){
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value? {'mismatch':true}:null;
}