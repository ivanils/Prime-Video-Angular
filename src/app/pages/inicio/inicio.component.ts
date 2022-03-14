import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/interfaces/interfaces';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  page    : string = 'Inicio'
  sliders : Array<Slider> = []
  constructor(
    private bbdd : BbddService
  ) { 
    this.sliders = bbdd.slidersInicio
  }

  ngOnInit(): void {
  }

}
