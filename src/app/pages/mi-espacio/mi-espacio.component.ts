import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-espacio',
  templateUrl: './mi-espacio.component.html',
  styleUrls: ['./mi-espacio.component.scss']
})
export class MiEspacioComponent implements OnInit {
  page : string = 'Mi espacio'
  constructor() { }

  ngOnInit(): void {
  }

}
