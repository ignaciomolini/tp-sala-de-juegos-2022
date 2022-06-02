import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {
  mazo: string[] = [
    "assets/images/mayor-menor/1-espada.png",
    "assets/images/mayor-menor/2-espada.png",
    "assets/images/mayor-menor/3-espada.png",
    "assets/images/mayor-menor/4-espada.png",
    "assets/images/mayor-menor/5-espada.png",
    "assets/images/mayor-menor/6-espada.png",
    "assets/images/mayor-menor/7-espada.png",
    "assets/images/mayor-menor/8-espada.png",
    "assets/images/mayor-menor/9-espada.png",
    "assets/images/mayor-menor/10-espada.png",
    "assets/images/mayor-menor/11-espada.png",
    "assets/images/mayor-menor/12-espada.png",
  ];
  indice: number = Math.floor(Math.random() * 12);
  carta: string = this.mazo[this.indice];
  juegoTerminado: boolean = false;
  puntaje: number = 0;
  usuario: any;

  constructor(private puntajeService: PuntajeService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  evaluarCarta(eleccion: string) {
    let indiceNuevo = Math.floor(Math.random() * 12);

    while (indiceNuevo == this.indice) {
      indiceNuevo = Math.floor(Math.random() * 12);
    }

    if (eleccion == 'mayor' && indiceNuevo > this.indice) {
      this.puntaje++;
    }
    else if (eleccion == 'menor' && indiceNuevo < this.indice) {
      this.puntaje++;
    }
    else {
      this.juegoTerminado = true;
    }

    this.indice = indiceNuevo;
    this.carta = this.mazo[this.indice];
  }

  volverAJugar() {
    this.puntaje = 0;
    this.juegoTerminado = false;
  }

  async guardarPuntaje() {
    const obj = {fecha: new Date().getTime(), emailUsuario: this.usuario.email, puntaje: this.puntaje};
    try {
      await this.puntajeService.agregarPuntaje("puntajesMayorMenor", obj);
      this.toastr.success("El puntaje se guardo con exito", "OK", {
        timeOut: 3000
      });
      this.volverAJugar();
    }
    catch(error: any){
      this.toastr.error("Error al guarda el puntaje", "Error", {
        timeOut: 3000
      });
    }
  }

}
