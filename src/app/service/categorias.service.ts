import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient:HttpClient) { }
  obtienecategorias(mes:string):Observable<any>{
    const   params:FormData=new FormData();
    params.append("mes",mes);
    console.log("el servicio enviará: ",mes);
    return this.httpClient.post<any>(GLOBAL.servicios.concat('getcategorias'),params);
  }
}
