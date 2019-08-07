import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, icon,marker } from 'leaflet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map:Map;
  lat:number;
  lng:number;
  coord:string;
  nombre:string;
  descripcion1:string;
  descripcion2:string;
  extra:string;
  vector=[];
  myIcon = icon({
    iconUrl: 'assets/images/myiconx.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/images/myicon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  constructor(private activatedRoute:ActivatedRoute) { }
  leafletMap() {
    console.log("boton");
    this.map = new Map('mimapa').setView([this.lat,this.lng], 15);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    const markPoint = marker([this.lat,this.lng],{icon:this.myIcon});
    // markPoint.bindPopup("&#9654; <a href='https://www.google.com/maps/dir/?api=1&destination="+this.lat+","+this.lng+"&travelmode=driving'>Cómo llegar</a><br>&#9654; <a href='whatsapp://send?phone=+591 79760327'>Whatsapp<a>");
    markPoint.bindPopup("&#9654; <a href='https://www.google.com/maps/dir/?api=1&destination="+this.lat+","+this.lng+"&travelmode=driving'>Cómo llegar</a>");
    this.map.addLayer(markPoint);
  }
  ngOnInit() {
    this.coord=this.activatedRoute.snapshot.paramMap.get("latlng");
    this.nombre=this.activatedRoute.snapshot.paramMap.get("nombre");
    this.descripcion1=this.activatedRoute.snapshot.paramMap.get("descripcion1");
    this.descripcion2=this.activatedRoute.snapshot.paramMap.get("descripcion2");
    this.extra=this.activatedRoute.snapshot.paramMap.get("extra");
    this.vector=this.coord.split(",");
    this.lat=parseFloat(this.vector[0]);
    this.lng=parseFloat(this.vector[1]);
    // console.log("coordenada recibidas: ",this.coord);
    // console.log("lat: ",this.lat);
    // console.log("lng: ",this.lng);
    setTimeout(function(){
      document.getElementById("btnmapa").click(); 
    }, 1500);
  }

}
