import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-slider',
  templateUrl: './tarjeta-slider.component.html',
  styleUrls: ['./tarjeta-slider.component.scss']
})
export class TarjetaSliderComponent implements OnInit {

  @Input() info : any = {
    imagen : ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
