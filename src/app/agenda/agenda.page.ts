import { Component, OnInit } from '@angular/core';
import { GestionService } from '../service/gestion.service';
import { AlertController, Events } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  gestion='';
  constructor(private gestionService:GestionService, private alertCtrl:AlertController, private events:Events) { }

  ngOnInit() {
    this.llamaServicioGestion();
  }
  llamaServicioGestion(){
    this.gestionService.obtieneGestion().subscribe((data:any)=>{
      console.log("gestion desde servicio: ",data.gestion);
      this.gestion=data.gestion;
    },
    (err)=>{
      console.log("error en el servicio");
      this.events.publish('net:desconectado');
    }
    );
  }
  
}
