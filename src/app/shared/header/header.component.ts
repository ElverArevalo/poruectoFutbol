import { Component, OnInit } from '@angular/core';
import { UsuarioService, ModalLoginService } from 'src/app/services/service.index';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario: any;
  iniciarSesion: string = 'Iniciar Sesion';

  constructor(public _serviceUsuario: UsuarioService,
    public _serviceModalLogin: ModalLoginService,
    public router: Router) { }

  ngOnInit() {
   
  
  }

 
  mostrarUsuario() {
    if (!this._serviceUsuario.estaLogueado()) {
    
      return this.iniciarSesion;
    } else {
      
      return this._serviceUsuario.usuario.nombre;
    }
  }


  cerrarSesion() {
    
    this._serviceUsuario.logout();
    
  

  }
  mostrarModal() {
  
    this._serviceModalLogin.mostrarModal();
    
  }


}
