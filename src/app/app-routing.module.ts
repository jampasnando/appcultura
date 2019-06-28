import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'menu/:mes', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'eventos/:portada/:mes/:idcat', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
