import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import {GLOBAL} from '../global';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  mes:string;
  gestion:string;
  nrocat:number;
  limite:number;
  nros=[];
  i=0;
  primeraimagen='';
  datos:any[];
  meses=['','ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  constructor(private activatedRoute:ActivatedRoute,private categoriaService:CategoriasService,private events:Events) { }

  ngOnInit() {
    this.mes=this.activatedRoute.snapshot.paramMap.get('mes');
    this.gestion=this.activatedRoute.snapshot.paramMap.get('gestion');
    this.llamaservicio(this.mes);
  }
  llamaservicio(mes:string){
    this.categoriaService.obtienecategorias(mes).subscribe((data:any)=>{
      for(let unacat of data.data){
        unacat.imagen=GLOBAL.imgs.concat(unacat.imagen);
        unacat.portada=GLOBAL.imgs.concat(unacat.portada);
        unacat.nombre=unacat.nombre.toLowerCase();
      }
      
      this.nrocat=data.data.length;
      if(this.nrocat>0){
        if((this.nrocat%2)==0){
          this.limite=Math.floor(this.nrocat/2);
        }
        else{
          this.limite=Math.floor(this.nrocat/2)+1;
        }
        for(let j=1;j<=this.limite;j++){
          this.nros.push(j);
        }
        this.primeraimagen=data.data[0].imagen;
        this.datos=data.data;
      }
    },
      (err)=>{
        this.events.publish('net:desconectado');
      }
    );
  }
}
