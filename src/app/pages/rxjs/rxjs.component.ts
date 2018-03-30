import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.contadorObserver().subscribe(
      (numero) => console.log('Subs', numero),
      (error) => console.error('Error en el obs', error),
      () => console.log('Observer completo!')
    );

  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  contadorObserver(): Observable<any> {

    return new Observable(Observer => {

      let salida: any = {
        valor: 0
      };

      let intervalo = setInterval(() => {

        if (salida.valor < 5) {
          salida.valor += 1;
          Observer.next(salida);
        } else {
          clearInterval(intervalo);
          Observer.complete();
        }

      }, 1000);

    }).map((response: any) => {
      return response.valor;
    });

  }

}
