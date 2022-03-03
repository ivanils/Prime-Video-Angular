import { Component, OnInit } from '@angular/core';
import { UlNav } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ulNav : Array<UlNav> = [
    {
      titulo : "Inicio",
      src    : "/",
      routing: true
    },
    {
      titulo : "Tienda",
      src    : "/tienda",
      routing: true
    },
    {
      titulo : "Canales",
      src    : "/canales",
      routing: true
    },
    {
      titulo : "Categorías",
      src    : "#",
      routing: false
    },
    {
      titulo : "Mi espacio",
      src    : "/miespacio",
      routing: true
    },
  ]
  page : string = 'Inicio'
  constructor() { }

  ngOnInit(): void {
  }

}
