import { Component, OnInit } from '@angular/core';
import { ConcursosService } from '../service/concursos.service';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.page.html',
  styleUrls: ['./concursos.page.scss'],
})
export class ConcursosPage implements OnInit {
  mes:string="2";
  idcat:string="7";
  datos:any[];
  nombre:string="Concursos";
  portada:string="http://www.cochabamba.bo/images/agenda_cultural/danza_portada.png";
  nroeventos:number;
  constructor(private eventosService:ConcursosService) { }

  ngOnInit() {
    
    this.llamaServicioConcursos(this.mes,this.idcat);
  }
  llamaServicioConcursos(mes,idcat){
    this.eventosService.obtieneConcursos(mes,idcat).subscribe((data:any)=>{
      console.log("eventos recibidos del servicio: ",data);
      this.datos=data.data;
      this.nroeventos=this.datos.length;
      for(let i=0;i<this.nroeventos;i++){
        if(this.datos[i].extra==null){
          this.datos[i].extra="vacio";
        }
        // console.log(this.datos[i]);
      }
    });
  }

}
