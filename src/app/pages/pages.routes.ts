import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NopageFoundComponent } from '../shared/nopage-found/nopage-found.component';






// definir arreglo de rutas
  const pagesRoutes: Routes = [
    {
      path:'',
       component: PagesComponent,
       children: [
        {path:'dashboard', component: DashboardComponent, data: {titulo:'Dashboard'}},
        {path:'home', component: HomeComponent, data: {titulo:'Home'}},
        {path:'noFound', component: NopageFoundComponent, data: {titulo:'No Found'}},
        {path:'about', component: AboutComponent, data: {titulo:'About'}},
        {path:'', redirectTo: '/home', pathMatch: 'full'},
       ]
      },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );