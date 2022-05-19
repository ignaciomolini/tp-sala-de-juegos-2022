import { Component, OnInit } from '@angular/core';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-ahorcado-puntajes',
  templateUrl: './ahorcado-puntajes.component.html',
  styleUrls: ['./ahorcado-puntajes.component.css']
})
export class AhorcadoPuntajesComponent implements OnInit {
  arrayPuntajes: any[] = [];

  constructor(private puntajeService: PuntajeService) { }

  ngOnInit(): void {
    this.puntajeService.cargarPuntajes('puntajesAhorcado', 'vidasRestantes').subscribe(puntajes => {
      this.arrayPuntajes = puntajes;
    })
    console.log(this.arrayPuntajes);
  }

}
