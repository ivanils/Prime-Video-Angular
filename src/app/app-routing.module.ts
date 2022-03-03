import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalesComponent } from './pages/canales/canales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MiEspacioComponent } from './pages/mi-espacio/mi-espacio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  {path: '', component : InicioComponent},
  {path: 'canales', component : CanalesComponent },
  {path: 'miespacio/:id', component : MiEspacioComponent },
  {path: 'tienda', component : TiendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
