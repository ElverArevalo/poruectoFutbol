import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;
  usuario: Usuario;
  constructor(public _serviceUsuario: UsuarioService,
    public router: Router) { }

  ngOnInit() {
    this.usuario = this._serviceUsuario.usuario
    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 1 ){
      this.recuerdame = true;
    }
  }


  ingresar(forma: NgForm) {
    if(forma.invalid){
      return;
    }
  
    let usuario = new Usuario( null, forma.value.email, forma.value.password);
    

   this._serviceUsuario.login(usuario, forma.value.recuerdame)
    .subscribe(resp=>{
      console.log(resp);

    this.router.navigate(['/logins']);

    });
   
   
  
 
  }

}
