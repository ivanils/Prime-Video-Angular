import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanalesComponent } from './canales/canales.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiEspacioComponent } from './mi-espacio/mi-espacio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    CanalesComponent,
    InicioComponent,
    MiEspacioComponent,
    TiendaComponent
  ],
  exports:[
    CanalesComponent,
    InicioComponent,
    MiEspacioComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PagesModule { }
