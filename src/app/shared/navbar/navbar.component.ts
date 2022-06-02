import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogeado: Usuario;
  @Output() usuarioActual = new EventEmitter<Usuario>();

  constructor(private authService: AuthService, private rutas: Router, private toastr: ToastrService) {
    this.usuarioLogeado = new Usuario('', '', '', '', '');
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((usuario: any) => {
      this.usuarioLogeado.nombre = usuario?.displayName;
      this.usuarioLogeado.email = usuario?.email;
      this.usuarioLogeado.uid = usuario?.uid;
      this.usuarioActual.emit(this.usuarioLogeado);
    })
  }

  async logoutUser(){
    try {
      await this.authService.logout();
      localStorage.removeItem('usuario');
      this.rutas.navigate(['auth/login']);
      this.toastr.success("Sesion cerrada correctamente", "Hasta luego", {
        timeOut: 3000
      });
    } catch (error: any) {
      this.toastr.error(error.message, "Error", {
        timeOut: 3000
      });
    }    
  }

}
