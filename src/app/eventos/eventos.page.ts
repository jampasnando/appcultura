import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  portada:string;
  mes:string;
  idcat:string;
  eventos:Eventos[]=[
    {
      "que":"Danza1 de folk dance y jazz...",
      "cuando":"20 de Julio",
      "donde":"Teatro al Aire Libre",
      "hora":"10:00am a 12:01pm"
    },
    {
      "que":"Danza2 de folk dance y jazz...",
      "cuando":"20 de Julio",
      "donde":"Teatro al Aire Libre",
      "hora":"10:00am a 12:01pm"
    },
    {
      "que":"TANGO - ORQUESTA...",
      "cuando":"20 de Julio",
      "donde":"Teatro al Aire Libre",
      "hora":"10:00am a 12:01pm"
    },
    {
      "que":"Danza4 de folk dance y jazz...",
      "cuando":"20 de Julio",
      "donde":"Teatro al Aire Libre",
      "hora":"10:00am a 12:01pm"
    }
  ];

  
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.portada=this.activatedRoute.snapshot.paramMap.get('portada');
    this.mes=this.activatedRoute.snapshot.paramMap.get('mes');
    this.idcat=this.activatedRoute.snapshot.paramMap.get('idcat');
    console.log("portada: ", this.portada," mes: ", this.mes, " idcat: ",this.idcat);
  }

}
interface Eventos{
  que:string;
  cuando:string;
  donde:string;
  hora:string;
}