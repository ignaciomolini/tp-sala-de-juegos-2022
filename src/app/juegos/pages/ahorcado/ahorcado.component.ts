import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeService } from 'src/app/services/puntaje.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  primeraFila: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  segundaFila: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  terceraFila: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  palabras: string[] = ["computadora", "programacion", "escalera", "guiso de lentejas", "aire acondicionado",
  "teclado", "guitarra", "chinchulin"];
  palabra: string = '';
  palabraConGuiones: string = '';
  numeroFallos: number = 0;
  vidas: number = 6;
  juego: boolean = true;
  perdio: boolean = false;
  gano: boolean = false;
  usuario: any;

  constructor(private puntajeService: PuntajeService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.generarPalabraRandom();
    this.formarPalabraConGuiones();
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  formarPalabraConGuiones() {
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] != ' ') {
        this.palabraConGuiones += '_';
      }
      else {
        this.palabraConGuiones += ' ';
      }
    }
  }

  generarPalabraRandom() {
    this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)].toUpperCase();
  }

  evaluarLetra(letra: string) {
    const boton = document.getElementById('letra-' + letra);

    if (this.numeroFallos < 6) {
      if (!this.letraAcertada(letra)) {
        boton?.classList.add('btn-error');
        boton?.classList.add('disabled');
        this.numeroFallos += 1;
        this.vidas -= 1;
      }
      else {
        boton?.classList.add('btn-acierto');
        boton?.classList.add('disabled');
        if (this.palabra == this.palabraConGuiones) {
          setTimeout(() => {
            this.juego = false;
            this.gano = true;
          }, 1000);
        }
      }
    }

    if (this.numeroFallos == 6) {
      setTimeout(() => {
        this.juego = false;
        this.perdio = true;
      }, 1000);
    }
  }

  letraAcertada(letra: string) {
    let retorno = false;
    for (let i = 0; i < this.palabra.length; i++) {
      if (letra == this.palabra[i]) {
        this.palabraConGuiones = this.palabraConGuiones.slice(0, i) + letra +
          this.palabraConGuiones.slice(i + 1);
        retorno = true;
      }
    }
    return retorno;
  }

  volverAJugar() {
    this.numeroFallos = 0;
    this.vidas = 6;
    this.juego = true;
    this.perdio = false;
    this.gano = false;
    this.palabraConGuiones = '';
    this.generarPalabraRandom();
    this.formarPalabraConGuiones();
  }

  async guardarPuntaje() {
    const obj = { fecha: new Date().getTime(), emailUsuario: this.usuario.email, vidasRestantes: this.vidas };
    try {
      await this.puntajeService.agregarPuntaje("puntajesAhorcado", obj);
      this.toastr.success("El puntaje se guardo con exito", "OK", {
        timeOut: 3000
      });
      this.volverAJugar();
    }
    catch (error: any) {
      this.toastr.error("Error al guarda el puntaje", "Error", {
        timeOut: 3000
      });
    }
  }


}
