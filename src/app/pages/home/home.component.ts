import { Component, OnInit } from '@angular/core';
import { CanchaService } from 'src/app/services/service.index';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _serviceCancha: CanchaService ) { }

  ngOnInit() {
    this. listarCancha();
  }
  listarCancha() {
    this._serviceCancha.listarCanchas()
    .subscribe((resp:any) =>{
    
      console.log(resp);
    });
  }

}
