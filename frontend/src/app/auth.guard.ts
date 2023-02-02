import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api : ApiService, private route:Router){}
  canActivate():boolean{
    if(this.api.loggedIn())
    {
    return true;
  }else
  {
  this.route.navigate(['/login'])
    return false;

  }
  
}
}
