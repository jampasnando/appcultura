import { Component, OnInit } from '@angular/core';
import { GestionService } from '../service/gestion.service';
import { AlertController, Events } from '@ionic/angular';
import { GLOBAL } from '../global'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  gestion='';
  imgfondo='';
  constructor(private gestionService:GestionService, private alertCtrl:AlertController, private events:Events) { }

  ngOnInit() {
    this.llamaServicioGestion();
  }
  llamaServicioGestion(){
    this.gestionService.obtieneGestion().subscribe((data:any)=>{
      console.log("gestion desde servicio: ",data.data.bgimg);
      this.gestion=data.data.gestion.gestion;
      this.imgfondo=GLOBAL.imgs.concat(data.data.bgimg);
    },
    (err)=>{
      console.log("error en el servicio");
      this.events.publish('net:desconectado');
    }
    );
  }
  
}
