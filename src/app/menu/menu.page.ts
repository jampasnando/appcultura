import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import {GLOBAL} from '../global';
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
  constructor(private activatedRoute:ActivatedRoute,private categoriaService:CategoriasService) { }

  ngOnInit() {
    this.mes=this.activatedRoute.snapshot.paramMap.get('mes');
    this.gestion=this.activatedRoute.snapshot.paramMap.get('gestion');
    console.log(this.mes);
    this.llamaservicio(this.mes);
  }
  llamaservicio(mes:string){
    console.log("se recibio en llamaservicio: ",mes);
    this.categoriaService.obtienecategorias(mes).subscribe((data:any)=>{
      console.log("recibido: ",data); 
      for(let unacat of data.data){
        unacat.imagen=GLOBAL.imgs.concat(unacat.imagen);
        unacat.portada=GLOBAL.imgs.concat(unacat.portada);
        console.log("una cat: ", unacat.nombre," su imagen: ",unacat.imagen);
      }
      this.nrocat=data.data.length;
      if((this.nrocat%2)==0){
        this.limite=Math.floor(this.nrocat/2);
      }
      else{
        this.limite=Math.floor(this.nrocat/2)+1;
      }
      for(let j=1;j<=this.limite;j++){
        this.nros.push(j);
      }
      console.log("nros: ",this.nros);
      console.log("primeraimagen: ",data.data[0].imagen);
      this.primeraimagen=data.data[0].imagen;
      this.datos=data.data;
      console.log("leido de datos: ",this.datos[0].portada);
    });
  }
}
