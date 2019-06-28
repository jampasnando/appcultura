import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../service/eventos.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  portada:string;
  mes:string;
  idcat:string;
  nombre:string;
  nroeventos:number;
  datos:any[];
 
  constructor(private activatedRoute:ActivatedRoute,private eventosService:EventosService) { }

  ngOnInit() {
    this.portada=this.activatedRoute.snapshot.paramMap.get('portada');
    this.mes=this.activatedRoute.snapshot.paramMap.get('mes');
    this.idcat=this.activatedRoute.snapshot.paramMap.get('idcat');
    this.nombre=this.activatedRoute.snapshot.paramMap.get('nombre');
    console.log("portada: ", this.portada," mes: ", this.mes, " idcat: ",this.idcat);
    this.llamaServicioEventos(this.mes,this.idcat);
  }
  llamaServicioEventos(mes,idcat){
    this.eventosService.obtieneEventos(mes,idcat).subscribe((data:any)=>{
      console.log("eventos recibidos del servicio: ",data);
      this.datos=data.data;
      this.nroeventos=this.datos.length;
    });
  }

}
