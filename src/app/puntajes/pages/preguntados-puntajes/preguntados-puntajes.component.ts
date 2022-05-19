import { Component, OnInit } from '@angular/core';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-preguntados-puntajes',
  templateUrl: './preguntados-puntajes.component.html',
  styleUrls: ['./preguntados-puntajes.component.css']
})
export class PreguntadosPuntajesComponent implements OnInit {
  arrayPuntajes: any[] = [];

  constructor(private puntajeService: PuntajeService) { }

  ngOnInit(): void {
    this.puntajeService.cargarPuntajes('puntajesPreguntados', 'puntaje').subscribe(puntajes => {
      this.arrayPuntajes = puntajes;
    })
    console.log(this.arrayPuntajes);
  }

}
