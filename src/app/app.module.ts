import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { OfferComponent } from './offer/offer.component';
import { JeloComponent } from './jelo/jelo.component';
import { AppRoutingModule } from './app-routing.module';
import { DohvatiJelaService } from './dohvati-jela.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapitalPipe } from './capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    ContactComponent,
    MenuComponent,
    HomeComponent,
    SliderComponent,
    OfferComponent,
    JeloComponent,
    CapitalPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "menu",
        component : MenuComponent
      },
      {
        path : "menu/:id",
        component : JeloComponent
      }
    ])
  ],
  providers: [
    DohvatiJelaService
  ],
  bootstrap: [AppComponent,NavigacijaComponent]
})
export class AppModule { }
