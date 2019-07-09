import { Component } from '@angular/core';

import { Platform, Events, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events:Events,
    private alertCtrl:AlertController
  ) {
    this.initializeApp();
    events.subscribe('net:desconectado',()=> {
      console.log("se disparó evento net:desconectado");
      this.alertaFallaServicio();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async alertaFallaServicio(){
    const alerta= await this.alertCtrl.create({
      header: "CONEXIÓN INTERRUMPIDA",
      subHeader:"Por favor revise su conexión a Internet",
      message:"La aplicación necesita de Internet para mostrar eventos actuales",
      buttons:[{
        text:"Aceptar",
        role:"Cancel",
        cssClass:"",
        handler:(blah)=>{

        }
      }]
    });
    await alerta.present();
  }
}
