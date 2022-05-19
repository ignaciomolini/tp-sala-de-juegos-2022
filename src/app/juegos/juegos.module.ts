import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';

import { MayorMenorComponent } from './pages/mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { BatallaDbzComponent } from './pages/batalla-dbz/batalla-dbz.component';


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
