import { NgModule } from '@angular/core';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    ChartsModule
  ]
})
export class ComponentModule { }
