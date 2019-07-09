import { HttpClient } from '@angular/common/http';
import { HttpHandler } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DohvatiPonuduService {

  constructor(private service : HttpClient) { }

  dohvatiPonudu(){
    var ponuda = this.service.get("http://localhost:4200/assets/data/ponuda.json");
    return ponuda;
  }
}
