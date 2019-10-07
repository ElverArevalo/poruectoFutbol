import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TitulosComponent } from './titulos/titulos.component';







@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    NopageFoundComponent,
    FooterComponent,
    ToolbarComponent,
    TitulosComponent,
  ],
 
 exports: [
    HeaderComponent,
    NopageFoundComponent,
    FooterComponent,
    ToolbarComponent,
    TitulosComponent,
 ],
 
})
export class SharedModule { }
