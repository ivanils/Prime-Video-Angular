import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbddService } from './services/bbdd.service';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SliderRegularComponent } from './componentes/sliders/slider-regular/slider-regular.component';
import { MostViewedComponent } from './componentes/most-viewed/most-viewed.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { CanalesComponent } from './pages/canales/canales.component';
import { MiEspacioComponent } from './pages/mi-espacio/mi-espacio.component';
import { TarjetaSliderComponent } from './componentes/sliders/tarjeta-slider/tarjeta-slider.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderRegularComponent,
    MostViewedComponent,
    InicioComponent,
    TiendaComponent,
    CanalesComponent,
    MiEspacioComponent,
    TarjetaSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BbddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
