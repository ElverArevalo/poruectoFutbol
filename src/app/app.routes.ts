

import { RouterModule,  Routes } from '@angular/router';

import { NopageFoundComponent } from './shared/nopage-found/nopage-found.component';
import { RegistroComponent } from './login/registro.component';



// definir arreglo de rutas
  const appRoutes: Routes = [
    
  
    {path:'registro', component: RegistroComponent, data: {titulo:'Registro'}},
    
    {path:'**', component: NopageFoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );