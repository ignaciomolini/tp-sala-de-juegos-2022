import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeService } from 'src/app/services/puntaje.service';
@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  paises: any[] = [];
  respuestaCorrecta: any;
  respuestas: any[] = [];
  preguntas: string[] = ['Cual es el nombre de este pais?', 'Cual es la capital de este pais?', 'Cual es la poblacion de este pais?'];
  pregunta: string = '';
  tiposRespuesta: string[] = ['nombre', 'capital', 'poblacion'];
  tipoRespuesta: string = '';
  puntaje: number = 0;
  perdiste: boolean = false;
  usuario: any;

  constructor(private apiService: ApiService, private puntajeService: PuntajeService, private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.traerPaises();
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  traerPaises() {
    this.apiService.obtenerTodosLosPaises().subscribe((paises: any) => {
      this.paises = paises.map((auxPais: any) => {
        let capital = auxPais.capital;
        if (capital == undefined) {
          capital = [];
        }
        return { nombre: auxPais.name.common, bandera: auxPais.flags.svg, capital: capital[0], poblacion: auxPais.population }
      }).filter((auxPais: any) => {
        return auxPais.capital != undefined
      });
      this.setearValores()
    })
  }

  setearValores() {
    let random = Math.floor(Math.random() * 3);
    this.pregunta = this.preguntas[random];
    this.tipoRespuesta = this.tiposRespuesta[random];
    this.respuestas = this.paises.sort(() => Math.random() - 0.5).slice(0, 4);
    this.respuestaCorrecta = this.respuestas[Math.floor(Math.random() * this.respuestas.length)];
  }

  evaluarRespuesta(respuesta: any) {
    if (respuesta == this.respuestaCorrecta) {
      this.setearValores();
      this.puntaje++;
    } else {
      this.perdiste = true;
    }
  }

  reset() {
    this.setearValores();
    this.perdiste = false;
    this.puntaje = 0;
  }

  async guardarPuntaje() {
    const obj = { fecha: new Date().getTime(), emailUsuario: this.usuario.email, puntaje: this.puntaje };
    try {
      await this.puntajeService.agregarPuntaje("puntajesPreguntados", obj);
      this.toastr.success("El puntaje se guardo con exito", "OK", {
        timeOut: 3000
      });
      this.reset();
    }
    catch (error: any) {
      this.toastr.error("Error al guarda el puntaje", "Error", {
        timeOut: 3000
      });
    }
  }

}
