import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private authService:AuthService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
            let value=this.authService.isAuthenticated();
            if(value===true)
            {
                return true;
            }
            else
            {
                this.router.navigate(['/']);
            }
    }
    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        if(this.authService.isAuthenticated()===true)
        {
            return true;
        }
        else{
            return false;
        }
    }
    
}