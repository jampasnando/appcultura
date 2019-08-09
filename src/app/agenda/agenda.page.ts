import { Component, OnInit } from '@angular/core';
import { GestionService } from '../service/gestion.service';
import { AlertController, Events } from '@ionic/angular';
import { GLOBAL } from '../global'
import { CategoriasService } from '../service/categorias.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  gestion='';
  imgfondo='';
  nroeventosmes=[];
  nroeventosmes2=[];
  mensaje:string;
  meses=['','ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  constructor(private file:File, private socialSharing:SocialSharing, private categoriasService:CategoriasService, private gestionService:GestionService, private alertCtrl:AlertController, private events:Events) { }

  ngOnInit() {
    this.llamaServicioGestion();
    for(let k=1;k<=6;k++){
      this.eventosPorMes1(k);
    }
    for(let j=1;j<=6;j++){
      this.eventosPorMes2(j);
    }
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

  eventosPorMes1(k){
      this.categoriasService.obtienecategorias2(k.toString()).subscribe((data:any)=>{
        this.nroeventosmes[k]=data.data.length;
      });
  }
  eventosPorMes2(j){
    let aux=j+6;
    this.categoriasService.obtienecategorias2(aux.toString()).subscribe((data:any)=>{
        this.nroeventosmes2[j]=data.data.length;
    });
  }
  async abreWhatsApp(indice) {
    // Text + Image or URL works
    let file = await this.resolveLocalFile();
    this.mensaje="Agenda Cultural Cbba\n\r *Android:* https://play.google.com/store/apps/details?id=com.gamc.com \n\r *IOS:* https://apps.apple.com/bo/app/agenda-cultural-cbba/id1475196824";
    console.log(this.mensaje);
    this.socialSharing.shareViaWhatsApp(this.mensaje, file.nativeURL, null).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
  async resolveLocalFile() {
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/images/`, 'compartirface.png', this.file.cacheDirectory, `${new Date().getTime()}.jpg`);
  }
 
  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }
  async abreFace() {
    let file = await this.resolveLocalFile();
    // this.socialSharing.shareViaFacebook(null, null, "https://play.google.com/store/apps/details?id=com.gamc.com").then(() => {
    //   this.removeTempFile(file.name);
    // }).catch((e) => {
    //   // Error!
    // });
    this.socialSharing.shareViaFacebook(null, null, "http://www.sistembo.com/testimg.php").then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {
      // Error!
    });
  }
}
