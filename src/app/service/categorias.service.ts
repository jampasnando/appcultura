import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient:HttpClient) { }
  obtienecategorias(mes:string):Observable<any>{
    const   params:FormData=new FormData();
    params.append("mes",mes);
    console.log("el servicio enviará: ",mes);
    return this.httpClient.post<any>('http://192.168.220.106/municipio/public/cultura/getcategorias',params);
  }
}
