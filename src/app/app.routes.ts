import { LoginComponent } from './login/login.component';

import { RouterModule,  Routes } from '@angular/router';

import { NopageFoundComponent } from './shared/nopage-found/nopage-found.component';


// definir arreglo de rutas
  const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
    
    {path:'**', component: NopageFoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );