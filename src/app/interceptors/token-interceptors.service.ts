import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/service.index';

/*
@Injectable()
export class TokenInterceptorsService implements HttpInterceptor {
 

  constructor(public servicioUsuario: UsuarioService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token =  this.servicioUsuario.token;
    if (token) {
      req = req.clone({
            setHeaders: {
                token: token
            }
        });
    }
    return next.handle(req);

  }
}
*/


@Injectable()
export class TokenInterceptorsService implements HttpInterceptor {
    constructor(public _serviceUsuario: UsuarioService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token =  this._serviceUsuario.token;
        
        if (token) {

            request = request.clone({
                setHeaders: {
                    token: token
                }
            });
        }

        return next.handle(request);
        

    }
}

