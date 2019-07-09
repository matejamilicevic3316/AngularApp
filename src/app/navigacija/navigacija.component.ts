import { DohvatiMeniService } from './../dohvati-meni.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NavigacijaComponent implements OnInit {

  constructor(private service : DohvatiMeniService) { }

  nav;
  ngOnInit() {
    this.service.dohvatiNav().subscribe(
      Response => {
        this.nav = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
