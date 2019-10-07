import { Component, OnInit } from '@angular/core';
import { UsuarioService, ModalLoginService } from '../services/service.index';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styles: []
})
export class ModalLoginComponent implements OnInit {
  usuario: Usuario;
  pass: string;
  email: string;
  recuerdame: boolean = false;
  constructor(
    public _servicioUsuario: UsuarioService,
    public serviceModalLogin: ModalLoginService
  ) { }

  ngOnInit() {
    this.usuario = this._servicioUsuario.usuario
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }
  cerrarModal() {
    
    this.serviceModalLogin.ocultarModal();
  }
  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._servicioUsuario.login(usuario, forma.value.recuerdame)
      .subscribe(resp => {
        forma.reset(
          { email: forma.value.email, recuerdame: forma.value.recuerdame }
          );

        this.cerrarModal();
      });
  }
}
