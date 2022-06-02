import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadosEncuestaComponent } from './resultados-encuesta.component';

const routes: Routes = [
  {
    path: '',
    component: ResultadosEncuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosEncuestaRoutingModule { }
