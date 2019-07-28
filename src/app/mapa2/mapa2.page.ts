import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import { Events } from '@ionic/angular';
import { Map, latLng, tileLayer, Layer, icon,marker,popup } from 'leaflet';
import { EventosService } from '../service/eventos.service';
@Component({
  selector: 'app-mapa2',
  templateUrl: './mapa2.page.html',
  styleUrls: ['./mapa2.page.scss'],
})
export class Mapa2Page implements OnInit {
  mes:string
  gestion:string
  map: Map;
  lat:number=-17.393838;
  lng:number=-66.156951;
  vector=[];
  coord:string;
  myIcon = icon({
    iconUrl: 'assets/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 40],
    popupAnchor: [0, -42],
    shadowUrl: 'assets/images/myicon-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [15, 40]
  });
  meses=['','ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  constructor(private eventosService:EventosService, private activedRoute:ActivatedRoute, private categoriaService:CategoriasService,private events:Events) { }

  ngOnInit() {
    this.mes=this.activedRoute.snapshot.paramMap.get("mes");
    this.gestion=this.activedRoute.snapshot.paramMap.get("gestion");
    console.log(this.mes," : ",this.gestion);
    setTimeout(function(){
      document.getElementById("btnmapa").click();
    },1500);
  }
  leafletMap() {
    console.log("boton");
    this.map = new Map('mimapa').setView([this.lat,this.lng], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    // const markPoint = marker([this.lat,this.lng],{icon:this.myIcon});
    // markPoint.bindPopup(this.subAlcadias[this.datos].title);
    // this.map.addLayer(markPoint);
    this.obtieneCategorias();
  }
  obtieneCategorias(){
    this.categoriaService.obtienecategorias(this.mes).subscribe((data:any)=>{
      for(let unacat of data.data){
        var idcat=unacat.id;
        this.obtieneEventos(idcat);
      }
    },      
    (err)=>{
      this.events.publish("El servicio de categorías no está disponible ahora");
    }
    );
  }
  obtieneEventos(idcat){
    this.eventosService.obtieneEventos(this.mes,idcat).subscribe((data2:any)=>{
      
      for(let unevento of data2.data){
        this.coord=unevento.coordenadas;
        this.vector=this.coord.split(",");
        this.lat=parseFloat(this.vector[0]);
        this.lng=parseFloat(this.vector[1]);
        var markPoint = marker([this.lat,this.lng],{icon:this.myIcon});
        var extra="";
        if(unevento.extra!=null && unevento.extra!="null"){
          extra=unevento.extra;
        }
        // markPoint.bindPopup(unevento.nombre + "<br>" + unevento.descripcion1 + "<br>" + unevento.descripcion2 + "<br><span style='color:yellow'>" + extra+ "</span>"+"<br>&#9654; <a href='https://www.google.com/maps/dir/?api=1&destination="+this.lat+","+this.lng+"&travelmode=driving'>Cómo llegar</a>&nbsp;&nbsp;&nbsp;&nbsp; &#9654; <a href='whatsapp://send?phone=+591 79760327'>Whatsapp<a>");
        markPoint.bindPopup(unevento.nombre + "<br>" + unevento.descripcion1 + "<br>" + unevento.descripcion2 + "<br><span style='color:yellow'>" + extra+ "</span>"+"<br>&#9654; <a href='https://www.google.com/maps/dir/?api=1&destination="+this.lat+","+this.lng+"&travelmode=driving'>Cómo llegar</a>");
        // markPoint.bounce();
        this.map.addLayer(markPoint);
        console.log(unevento);
      }
    },
    (err)=>{
      this.events.publish("El servicio de eventos no está disponible ahora");
    });
  }
}
