import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private api:ApiService) { }
  intercept(req:HttpRequest<any>,nxt:HttpHandler): Observable<HttpEvent<any>> {
    const token = this.api.getUserToken()
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `${token}` }
      })
    }

    return nxt.handle(req);
  }
}
