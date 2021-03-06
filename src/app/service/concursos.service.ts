import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class ConcursosService {

  constructor(private httpClient:HttpClient) { }
  obtienePortadaConcursos():Observable<any>{
    return this.httpClient.get<any>(GLOBAL.servicios.concat('getcategoriaconcurso'));
  }
  obtieneConcursos(mes,idcat):Observable<any>{
    const params:FormData=new FormData();
    params.append("mes",mes);
    params.append("categoria",idcat);
    return this.httpClient.post<any>(GLOBAL.servicios.concat("geteventos"),params)
  }
}
