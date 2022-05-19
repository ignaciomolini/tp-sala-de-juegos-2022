import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { BatallaDbzComponent } from './pages/batalla-dbz/batalla-dbz.component';
import { MayorMenorComponent } from './pages/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';

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
