import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proforma-analista',
  templateUrl: './proforma-analista.component.html',
  styleUrls: ['./proforma-analista.component.scss']
})
export class ProformaAnalistaComponent implements OnInit {

  bienvenida = true;
  constructor() { }

  ngOnInit() {
  }


  mostrarBienvenida() {
    return !this.bienvenida;
  }

}
