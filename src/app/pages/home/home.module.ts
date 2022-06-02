import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegosComponent } from './components/card-juegos/card-juegos.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardJuegosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
