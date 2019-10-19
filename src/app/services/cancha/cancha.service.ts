import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';




@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  

  constructor(public http: HttpClient) {
 
   }
 
   listarCanchas() {

    let url = URL_SERVICIOS + "/cancha"
    return this.http.get( url);
   
  }
}
