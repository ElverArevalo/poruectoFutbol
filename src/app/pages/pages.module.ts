
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ModalLoginComponent,
    
  ],
 
 exports: [
    DashboardComponent,
    PagesComponent,
   
 ],
 imports: [
  CommonModule,
  SharedModule,
  PAGES_ROUTES,
  FormsModule,
 
 ],
 providers: [],
 
})
export class PagesModule { }
