import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogeado: any;
  @Output() usuarioActual = new EventEmitter<any>();

  constructor(private authService: AuthService, private rutas: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuarioLogeado = usuario;
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
