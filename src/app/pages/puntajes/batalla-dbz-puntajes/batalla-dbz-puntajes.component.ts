import { Component, OnInit } from '@angular/core';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-batalla-dbz-puntajes',
  templateUrl: './batalla-dbz-puntajes.component.html',
  styleUrls: ['./batalla-dbz-puntajes.component.css']
})
export class BatallaDbzPuntajesComponent implements OnInit {
  arrayPuntajes: any[] = [];

  constructor(private puntajeService: PuntajeService) { }

  ngOnInit(): void {
    this.puntajeService.cargarPuntajes('puntajesBatallaDbz', 'nivel').subscribe(puntajes => {
      this.arrayPuntajes = puntajes;
    })
    console.log(this.arrayPuntajes);
  }

}
