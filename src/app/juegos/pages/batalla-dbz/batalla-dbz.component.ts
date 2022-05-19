import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-batalla-dbz',
  templateUrl: './batalla-dbz.component.html',
  styleUrls: ['./batalla-dbz.component.css']
})
export class BatallaDbzComponent implements OnInit {
  jugador: string = "https://i.pinimg.com/originals/be/d1/1c/bed11cfda468496bd1132b21a88e8428.png";
  oponentes: string[] = ["https://i.pinimg.com/originals/d3/fe/53/d3fe53ef4d3ddb9d7c9c97c4f1237713.png",
    "https://cdn.shopify.com/s/files/1/0399/1833/8203/files/Guldo_480x480.png?v=1623159792",
    "https://2.bp.blogspot.com/--Y249uoZmN8/WYjnIq9pU9I/AAAAAAAATUc/OWL6CGBg-fMvGEVQwtlShjYyrM_BdesyQCEwYBhgL/s1600/render_de_bardock_by_bygokuedition-d76bks7.png",
    "http://userscontent2.emaze.com/images/362462be-68bc-4628-8136-eb0bbea0b49f/Slide16_Pic1_636298791567211754.png",
    "https://2img.net/h/4.bp.blogspot.com/-tpdAPtOOXSQ/VRgGrq_nNhI/AAAAAAAAEOQ/eTJzUt7D8AI/s1600/3455741-3135099525-yamch.png",
    "https://4.bp.blogspot.com/-_KQhnZF2R8U/XD-ufKivuCI/AAAAAAAAAsE/3X1gk9lbqpcVnPF4VhXo7YgglGU0eNE4gCPcBGAYYCw/s1600/Babidi05.png",
    "https://vignette4.wikia.nocookie.net/dragonball/images/7/71/Kid_Buu_%28Render%29.png/revision/latest?cb=20120813181252&path-prefix=es"
  ]
  oponente: string = '';
  nivel: number = 1;
  estado: string = 'inicio';
  usuario: any;

  constructor(private puntajeService: PuntajeService, private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  iniciarBatalla() {
    let puntosJugador: number;
    let puntosOponente: number;
    this.estado = 'pelea';
    this.oponente = this.oponentes[Math.floor(Math.random() * 7)]
    document.getElementById('jugador')?.classList.add('animacion-jugador');
    document.getElementById('oponente')?.classList.add('animacion-oponente');
    switch (true) {
      case this.nivel <= 3:
        puntosJugador = Math.random() * 6;
        puntosOponente = Math.random() * 2;
        break;
      case this.nivel > 3 && this.nivel <= 6:
        puntosJugador = Math.random() * 4;
        puntosOponente = Math.random() * 2;
        break;
      case this.nivel > 6 && this.nivel <= 8:
        puntosJugador = Math.random() * 2;
        puntosOponente = Math.random() * 2;
        break;
      default:
        puntosJugador = Math.random();
        puntosOponente = Math.random() * 2;
    }
    this.evaluarPuntos(puntosJugador, puntosOponente);
  }

  evaluarPuntos(pj: number, po: number){
    setTimeout(() => {
      if (pj > po) {
        this.nivel++;
        this.estado = 'ganaste';
      }
      else {
        this.estado = 'perdiste';
      }
      document.getElementById('jugador')?.classList.remove('animacion-jugador');
      document.getElementById('oponente')?.classList.remove('animacion-oponente');
    }, 5000);
  }

  reset() {
    this.nivel = 1;
    this.estado = 'inicio';
  }

  async guardarPuntaje() {
    const obj = { fecha: new Date().getTime(), emailUsuario: this.usuario.email, nivel: this.nivel };
    try {
      await this.puntajeService.agregarPuntaje("puntajesBatallaDbz", obj);
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
