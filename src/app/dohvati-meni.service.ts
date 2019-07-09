
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DohvatiMeniService {

  constructor(private service : HttpClient) {
    
  }


  dohvatiNav(){
    var nav = this.service.get("http://localhost:4200/assets/data/nav.json");
    return nav;
  }
}
