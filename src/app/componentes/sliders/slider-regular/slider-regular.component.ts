import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-regular',
  templateUrl: './slider-regular.component.html',
  styleUrls: ['./slider-regular.component.scss']
})
export class SliderRegularComponent implements OnInit {
  moverSlider: number = 0
  tarjetas: number = 0
  vecesSlide: number = 0
  width: number = 0

  @Input() titulo     : string = ''
  @Input() cuantosVeo : number = 7
  @Input() contenido : Array<any> = []
  @Input() tituloEnlace :string  = ''
  @Input() enlace : string = ''

  constructor() { }

  ngOnInit(): void {
    this.recalcular()
  }
  recalcular():void{
    this.tarjetas = this.contenido.length
    this.vecesSlide = (this.tarjetas / this.cuantosVeo)
  }
  tamanoSlider() : string {
    return `calc(100%*${this.vecesSlide})`
  }
  anchoTarjeta() : string{
    return `calc(100%/${this.tarjetas})`
  }
  aumentarMover(): void{
    this.moverSlider++
    if(this.moverSlider == this.vecesSlide){
      this.moverSlider = 0
    }
  }
  disminuirMover() : void{
    this.moverSlider--
    if(this.moverSlider = 0){
      this.moverSlider = (this.vecesSlide - 1)
    }
  }
  valorTranslate() : string {
    return `translateX(${this.moverSlider * - 100 / this.vecesSlide}%)`
  }
}
