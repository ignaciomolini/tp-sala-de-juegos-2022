import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntajesRoutingModule } from './puntajes-routing.module';
import { AhorcadoPuntajesComponent } from './ahorcado-puntajes/ahorcado-puntajes.component';
import { MayorMenorPuntajesComponent } from './mayor-menor-puntajes/mayor-menor-puntajes.component';
import { PreguntadosPuntajesComponent } from './preguntados-puntajes/preguntados-puntajes.component';
import { BatallaDbzPuntajesComponent } from './batalla-dbz-puntajes/batalla-dbz-puntajes.component';


@NgModule({
  declarations: [
    AhorcadoPuntajesComponent,
    MayorMenorPuntajesComponent,
    PreguntadosPuntajesComponent,
    BatallaDbzPuntajesComponent
  ],
  imports: [
    CommonModule,
    PuntajesRoutingModule
  ]
})
export class PuntajesModule { }
