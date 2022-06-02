import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';

import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { BatallaDbzComponent } from './batalla-dbz/batalla-dbz.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    BatallaDbzComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
