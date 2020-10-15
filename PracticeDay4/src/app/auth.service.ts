import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn=false;
  constructor() { }
  isAuthenticated()
  {
    return this.signedIn;
  }
  signIn()
  {
    this.signedIn=true;
  }
  signOut()
  {
    this.signedIn=false;
  }
}
