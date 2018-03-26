import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aumentar() {
    if (this.porcentaje >= 100) {
      this.porcentaje = this.porcentaje;
      return;
    }
    this.porcentaje = this.porcentaje + 5;
    this.cambioValor.emit(this.porcentaje);
  }

  disminuir() {
    if (this.porcentaje <= 0) {
      this.porcentaje = this.porcentaje;
      return;
    }
    this.porcentaje = this.porcentaje - 5;
    this.cambioValor.emit(this.porcentaje);
  }

}
