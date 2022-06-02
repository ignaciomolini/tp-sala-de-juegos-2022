import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { PerfilGuard } from './guards/perfil.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'quien-soy',
    loadChildren: () => import('./pages/quien-soy/quien-soy.module').then(m => m.QuienSoyModule)
  },
  {
    path: 'encuesta',
    loadChildren: () => import('./pages/encuesta/encuesta.module').then(m => m.EncuestaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'resultados-encuesta',
    loadChildren: () => import('./pages/resultados-encuesta/resultados-encuesta.module').then(m => m.ResultadosEncuestaModule),
    data:{
      perfil: 'admin'
    },
    canActivate: [AuthGuard, PerfilGuard]
  },
  {
    path: 'juegos',
    loadChildren: () => import('./pages/juegos/juegos.module').then(m => m.JuegosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'puntajes',
    loadChildren: () => import('./pages/puntajes/puntajes.module').then(m => m.PuntajesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
