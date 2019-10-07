import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SharedService,  } from './service.index';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalLoginService } from '../modal-login/modal-login.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ SharedService, UsuarioService, ModalLoginService ],
})
export class ServiceModule { }
