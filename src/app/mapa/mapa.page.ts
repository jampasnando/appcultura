import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, icon,marker } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map:Map;
  myIcon = icon({
    iconUrl: 'assets/images/myicon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/images/myicon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  constructor() { }
  leafletMap() {
    console.log("boton");
    this.map = new Map('mimapa').setView([-17.5555,-66.5555], 15);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    const markPoint = marker([-17.5555,-66.5555],{icon:this.myIcon});
    // markPoint.bindPopup(this.subAlcadias[this.datos].title);
    this.map.addLayer(markPoint);
  }
  ngOnInit() {
    setTimeout(function(){
      document.getElementById("btnmapa").click(); 
    }, 1500);
  }

}
