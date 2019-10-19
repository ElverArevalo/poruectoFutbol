import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SharedService, CanchaService, UsuarioService, ModalLoginService,   } from './service.index';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ SharedService, UsuarioService, ModalLoginService, CanchaService ],
})
export class ServiceModule { }
