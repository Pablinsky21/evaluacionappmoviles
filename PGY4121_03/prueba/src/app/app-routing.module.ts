import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'listadop',
    loadChildren: () => import('./listado-persona/listado-persona.module').then( m => m.ListadoPersonaPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
 
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
