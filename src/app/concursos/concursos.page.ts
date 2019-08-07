import { Component, OnInit } from '@angular/core';
import { ConcursosService } from '../service/concursos.service';
import { GLOBAL } from '../global';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.page.html',
  styleUrls: ['./concursos.page.scss'],
})
export class ConcursosPage implements OnInit {
  mes:string="0";
  idcat:string="1";
  datos:any[];
  nombre:string="Concursos";
  nroeventos:number;
  portada:string;
  constructor(private eventosService:ConcursosService) { }

  ngOnInit() {
    this.llamaServicioPortada();
    this.llamaServicioConcursos(this.mes,this.idcat);
  }
  llamaServicioPortada(){
    this.eventosService.obtienePortadaConcursos().subscribe((data:any)=>{
      console.log("portada concurso: ",data.data);
      this.portada=GLOBAL.imgs.concat(data.data.portada);
    });
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
