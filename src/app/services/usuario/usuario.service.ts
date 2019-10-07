import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICIOS } from 'src/app/config/config';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';

 

  
 


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  usuario: Usuario;
  token: string;
  

  constructor(public http: HttpClient,
   
    public router: Router) {
    this.cargarStorage();
    
   }



  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }


  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    } else {
      this.token = '';
      this.usuario = null;
    }
  }
  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  login(usuario: Usuario, recordar: boolean = false) {
    

    if (recordar) {
      localStorage.setItem('email', usuario.email);
     
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login'
    return this.http.post(url, usuario)
      .pipe(map((resp: any) => {
       this.guardarStorage(resp.id, resp.token, resp.usuario)
        return true;
      }));
  }
  logout() {
  
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    
   

  }

  registratUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)

      .pipe(map((resp: any) => {
        swal('Felicitaciones!', usuario.email, 'success');
        return resp.usuario;

      }));
  }

}
