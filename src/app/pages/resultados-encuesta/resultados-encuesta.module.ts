import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosEncuestaRoutingModule } from './resultados-encuesta-routing.module';
import { ResultadosEncuestaComponent } from './resultados-encuesta.component';


@NgModule({
  declarations: [
    ResultadosEncuestaComponent
  ],
  imports: [
    CommonModule,
    ResultadosEncuestaRoutingModule
  ]
})
export class ResultadosEncuestaModule { }
