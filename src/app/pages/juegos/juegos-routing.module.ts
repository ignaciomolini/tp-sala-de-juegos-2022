import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { BatallaDbzComponent } from './batalla-dbz/batalla-dbz.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ahorcado',
        component: AhorcadoComponent
      },
      {
        path: 'mayor-menor',
        component: MayorMenorComponent
      },
      {
        path: 'preguntados',
        component: PreguntadosComponent
      },
      {
        path: 'batalla-dbz',
        component: BatallaDbzComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
