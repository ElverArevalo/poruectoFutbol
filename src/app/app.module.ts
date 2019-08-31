import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
