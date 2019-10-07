import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService, ModalLoginService } from '../services/service.index';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import  swal from 'sweetalert'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;

  constructor(public _servicoUsuario: UsuarioService,
              public _sereviceModalLogin: ModalLoginService,
              public router: Router) { }

  sonIguales(campo1: string, campo2: string){

    return (group: FormGroup) =>{

let pass1 = group.controls[campo1].value;
let pass2 = group.controls[campo2].value;
if(pass1 === pass2){
  return null;
}

      return {
        sonIguales: true
      };
    };

  }

  ngOnInit() {
   
  

    this.forma = new FormGroup({
        nombre: new FormControl(null, Validators.required),
        correo: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        condiciones: new FormControl(false),

    }, {validators: this.sonIguales('password', 'password2')});

 
  }

  regisrtrar(){

    if(this.forma.invalid){
      return;

    }
    if(!this.forma.value.condiciones){
     
      swal("Importante!", "Debe aceptar las condiciones!", "warning");
      return;
    }
    console.log(this.forma.value);

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,

    );
    this._servicoUsuario.registratUsuario(usuario)
    .subscribe(resp =>{
     console.log(resp);
      this.router.navigate(['/home']);
    });
  
  
  }


}