import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private httpClient:HttpClient) { }
  obtieneEventos(mes,idcat):Observable<any>{
    const params:FormData=new FormData();
    params.append("mes",mes);
    params.append("categoria",idcat);
    return this.httpClient.post<any>(GLOBAL.servicios.concat("geteventos"),params);
  };
}
