import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contador().then(() => {
      console.log('Terminado correctamente!');
    }).catch((error) => {
      console.error('Error!', error);
    });

  }

  ngOnInit() {
  }

  contador(): Promise<boolean> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
