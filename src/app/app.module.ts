import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './login/registro.component';








@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegistroComponent,
  

  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
