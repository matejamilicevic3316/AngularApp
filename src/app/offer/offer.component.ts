import { DohvatiPonuduService } from './../dohvati-ponudu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private service: DohvatiPonuduService) { }
  ponuda
  ngOnInit() {
    this.service.dohvatiPonudu().subscribe(
      Response => {
        this.ponuda = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
