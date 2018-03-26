import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porcentaje: number;
  nombre = 'hola';

  constructor() {
    this.porcentaje = 85;
  }

  ngOnInit() {
  }

  actualizar(evento: number) {
    this.porcentaje = evento;
  }

}
