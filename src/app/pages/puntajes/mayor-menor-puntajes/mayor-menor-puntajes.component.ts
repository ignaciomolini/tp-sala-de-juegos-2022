import { Component, OnInit } from '@angular/core';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-mayor-menor-puntajes',
  templateUrl: './mayor-menor-puntajes.component.html',
  styleUrls: ['./mayor-menor-puntajes.component.css']
})
export class MayorMenorPuntajesComponent implements OnInit {
  arrayPuntajes: any[] = [];

  constructor(private puntajeService: PuntajeService) { }

  ngOnInit(): void {
    this.puntajeService.cargarPuntajes('puntajesMayorMenor', 'puntaje').subscribe(puntajes => {
      this.arrayPuntajes = puntajes;
    })
    console.log(this.arrayPuntajes);
  }
}
