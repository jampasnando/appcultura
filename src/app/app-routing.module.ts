import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'agenda', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'menu/:mes/:gestion', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'eventos/:portada/:mes/:idcat/:nombre', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'mapa/:latlng/:nombre/:descripcion1/:descripcion2', loadChildren: './mapa/mapa.module#MapaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

