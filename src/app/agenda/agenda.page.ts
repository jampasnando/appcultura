import { Component, OnInit } from '@angular/core';
import { GestionService } from '../service/gestion.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  gestion='';
  constructor(private gestionService:GestionService) { }

  ngOnInit() {
    this.llamaServicioGestion();
  }
  llamaServicioGestion(){
    this.gestionService.obtieneGestion().subscribe((data:any)=>{
      console.log("gestion desde servicio: ",data[0].gestion);
      this.gestion=data[0].gestion;
    });
  }
}
