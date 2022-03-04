import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.scss']
})
export class CanalesComponent implements OnInit {
  page : string = 'Canales'
  constructor() { }

  ngOnInit(): void {
  }

}
