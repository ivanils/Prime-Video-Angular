import { Component, Input, OnInit } from '@angular/core';
import { ListaUrl} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ulNav : Array<ListaUrl> = [
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
  ulCategorias : Array<ListaUrl> = [
    {
      titulo : "Se incluye con Prime",
      src    : "#prime"
    },
    {
      titulo : "Amazon Originals y Exclusivos",
      src    : "#originals"
    },
    {
      titulo : "Películas",
      src    : "#peliculas"
    },
    {
      titulo : "Series",
      src    : "#series"
    },
    {
      titulo : "Infantil",
      src    : "#infantil"
    },
  ]
  ulGeneros : Array<ListaUrl> = [
    {
      titulo : "Acción y aventuras",
      src    : "#accion"
    },
    {
      titulo : "Romance",
      src    : "#romance"
    },
    {
      titulo : "Comedia",
      src    : "#comedia"
    },
    {
      titulo : "Ciencia ficción",
      src    : "cienciaficcion"
    },
    {
      titulo : "Drama",
      src    : "#drama"
    },
    {
      titulo : "Suspense",
      src    : "#suspense"
    },
    {
      titulo : "Documental",
      src    : "#documental"
    },
    {
      titulo : "Anime",
      src    : "#anime"
    },
    {
      titulo : "Infantil y familiar",
      src    : "#infantil"
    },
    {
      titulo : "Acción militar y guerra",
      src    : "#guerra"
    },
    {
      titulo : "Fantasía",
      src    : "#fantasia"
    },
    {
      titulo : "Deportes",
      src    : "#deportes"
    },
    {
      titulo : "Terror",
      src    : "#terror"
    },
    {
      titulo : "Crimen y policíaco",
      src    : "#crimen"
    }
  ]
  ulOtras : Array<ListaUrl> = [
    {
      titulo : "Películas añadidas recientemente",
      src    : "#peliculasanadidas"
    },
    {
      titulo : "Series añadidas recientemente",
      src    : "#seriesanadidas"
    },
    {
      titulo : "Títulos galardonados",
      src    : "#galardonados"
    },
    {
      titulo : "Video Grupal",
      src    : "#grupal"
    },
    {
      titulo : "Producido en europa",
      src    : "#europa"
    },
    {
      titulo : "Solo por tiempo limitado en Prime",
      src    : "#tiempolimitado"
    }
  ]
  @Input() page : string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
