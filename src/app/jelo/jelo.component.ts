import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DohvatiJelaService } from '../dohvati-jela.service';

@Component({
  selector: 'app-jelo',
  templateUrl: './jelo.component.html',
  styleUrls: ['./jelo.component.css']
})
export class JeloComponent implements OnInit {

  jelo;
  id;
  constructor(private service: DohvatiJelaService, private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute
    )  
    { 
      this.route.params.subscribe((params : Params)=>{
        this.id = params["id"];
      })
    }
 
   

  ngOnInit() {
    this.service.dohvatiJela().subscribe(
      Response => {
        this.jelo=Response[this.id-1]
        console.log(this.jelo)
      },
      error => {
        console.log(error);
      }
    );
  }
}
