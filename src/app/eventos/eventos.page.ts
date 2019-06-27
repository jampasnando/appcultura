import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  argumento:string;
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
    this.argumento='/assets/images/img'.concat(this.activatedRoute.snapshot.paramMap.get('evento')).concat('.png');
    console.log(this.argumento);
  }

}
interface Eventos{
  que:string;
  cuando:string;
  donde:string;
  hora:string;
}