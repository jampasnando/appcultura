import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Mapa2Page } from './mapa2.page';
import { CategoriasService } from '../service/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { EventosService } from '../service/eventos.service';

const routes: Routes = [
  {
    path: '',
    component: Mapa2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [Mapa2Page],
  providers:[CategoriasService,EventosService]
})
export class Mapa2PageModule {}
