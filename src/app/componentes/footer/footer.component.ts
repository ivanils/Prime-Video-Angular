import { Component, OnInit } from '@angular/core';
import { ListaUrl } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  listaFooter : Array<ListaUrl> = [
    {
      titulo  : "Términos y Aviso de privacidad",
      src     : "/terminos"
    },
    {
      titulo  : "Envíanos tus comentarios",
      src     : "/feedback"
    },
    {
      titulo  : "Ayuda",
      src     : "/ayuda"
    },
    {
      titulo  : "Aviso sobre cookies",
      src     : "/cookies"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
