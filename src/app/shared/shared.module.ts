import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';







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
  ],
 
 exports: [
    HeaderComponent,
    NopageFoundComponent,
    FooterComponent,
    ToolbarComponent
 ],
 
})
export class SharedModule { }
