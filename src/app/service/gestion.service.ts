import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private httpClient:HttpClient) { }
  obtieneGestion(){
    return this.httpClient.get(GLOBAL.servicios.concat("getgestion"));
  }
}
