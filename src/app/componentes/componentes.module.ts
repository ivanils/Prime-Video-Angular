import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { SliderRegularComponent } from './sliders/slider-regular/slider-regular.component';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from '../app-routing.module';
import { TarjetaSliderComponent } from './sliders/tarjeta-slider/tarjeta-slider.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MostViewedComponent,
    SliderRegularComponent,
    TarjetaSliderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MostViewedComponent,
    SliderRegularComponent,
    TarjetaSliderComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    AppRoutingModule
  ]
})
export class ComponentesModule { }
