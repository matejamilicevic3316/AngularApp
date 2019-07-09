import { DohvatiJelaService } from './../dohvati-jela.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class MenuComponent implements OnInit {

  constructor(private service : DohvatiJelaService) { }

  jela;
  ngOnInit() {
    this.service.dohvatiJela().subscribe(
      Response => {
        this.jela = Response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
