import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoPuntajesComponent } from './pages/ahorcado-puntajes/ahorcado-puntajes.component';
import { BatallaDbzPuntajesComponent } from './pages/batalla-dbz-puntajes/batalla-dbz-puntajes.component';
import { MayorMenorPuntajesComponent } from './pages/mayor-menor-puntajes/mayor-menor-puntajes.component';
import { PreguntadosPuntajesComponent } from './pages/preguntados-puntajes/preguntados-puntajes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ahorcado',
        component: AhorcadoPuntajesComponent
      },
      {
        path: 'mayor-menor',
        component: MayorMenorPuntajesComponent
      },
      {
        path: 'preguntados',
        component: PreguntadosPuntajesComponent
      },
      {
        path: 'batalla-dbz',
        component: BatallaDbzPuntajesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntajesRoutingModule { }
