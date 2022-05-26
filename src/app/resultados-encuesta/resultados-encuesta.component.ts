import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';

@Component({
  selector: 'app-resultados-encuesta',
  templateUrl: './resultados-encuesta.component.html',
  styleUrls: ['./resultados-encuesta.component.css']
})
export class ResultadosEncuestaComponent implements OnInit {
  encuestas: any [] = [];

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {
    this.encuestaService.traerTodasLasEncuesta().subscribe(encuestas => {
      this.encuestas = encuestas;
    })
  }

}
