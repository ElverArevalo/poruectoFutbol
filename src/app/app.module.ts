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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorsService } from './interceptors/token-interceptors.service';









@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegistroComponent
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
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorsService,
    multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
