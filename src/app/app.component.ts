import { Component} from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sala-de-juegos';
  usuarioLogeado: Usuario = new Usuario('', '', '', '', '');

  cargarUsuario(usuario: Usuario){
    this.usuarioLogeado = usuario;
  }
}
