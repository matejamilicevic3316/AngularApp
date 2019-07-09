import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DohvatiJelaService {

  constructor(private service:HttpClient) { }

  dohvatiJela(){
    var jela = this.service.get("http://localhost:4200/assets/data/jela.json");
    return jela;
  }
}
