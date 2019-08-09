import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../service/eventos.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
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
  mensaje:string;
  constructor(private file:File, private socialSharing:SocialSharing, private activatedRoute:ActivatedRoute,private eventosService:EventosService) { }

  ngOnInit() {
    this.portada=this.activatedRoute.snapshot.paramMap.get('portada');
    this.mes=this.activatedRoute.snapshot.paramMap.get('mes');
    this.idcat=this.activatedRoute.snapshot.paramMap.get('idcat');
    this.nombre=this.activatedRoute.snapshot.paramMap.get('nombre').toLowerCase();
    // console.log("portada: ", this.portada," mes: ", this.mes, " idcat: ",this.idcat);
    this.llamaServicioEventos(this.mes,this.idcat);
  }
  llamaServicioEventos(mes,idcat){
    this.eventosService.obtieneEventos(mes,idcat).subscribe((data:any)=>{
      // console.log("eventos recibidos del servicio: ",data);
      this.datos=data.data;
      this.nroeventos=this.datos.length;
      for(let i=0;i<this.nroeventos;i++){
        if(this.datos[i].extra==null){
          this.datos[i].extra="vacio";
        }

        //  console.log(this.datos[i]);
      }
    });
  }
  async resolveLocalFile() {
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/images/`, 'compartirface.png', this.file.cacheDirectory, `${new Date().getTime()}.jpg`);
  }
 
  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }
  async abreWhatsApp(indice) {
    // Text + Image or URL works
    let file= await this.resolveLocalFile();
    this.mensaje="*" + this.datos[indice].nombre + "* \n\r" + this.datos[indice].descripcion1 + "\n\r" + this.datos[indice].descripcion2;
    console.log(this.mensaje);
    this.socialSharing.shareViaWhatsApp(this.mensaje, file.nativeURL, null).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
}
