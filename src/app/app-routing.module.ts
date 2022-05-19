import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quien-soy',
    component: QuienSoyComponent
  },
  {
    path: 'encuesta',
    component: EncuestaComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule)
  },
  {
    path: 'puntajes',
    loadChildren: () => import('./puntajes/puntajes.module').then(m => m.PuntajesModule)
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
