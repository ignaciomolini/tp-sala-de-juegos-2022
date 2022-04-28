import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataLogService } from 'src/app/services/data-log.service';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: Usuario;

  constructor(private authService: AuthService, private rutas: Router, private toastr: ToastrService,
    private dataLog: DataLogService) { 
      this.usuario = new Usuario('', '', '');
    }

  ngOnInit(): void {
  }

  async registerUser() {
    if (this.usuario.nombre.length >= 3) {
      try {
        await this.authService.register(this.usuario.email, this.usuario.password); 
        this.authService.modifyUserName(this.usuario.nombre);
        this.toastr.success("Registrado con exito", "OK", {
          timeOut: 3000
        });
        await this.authService.login(this.usuario.email, this.usuario.password);
        this.guardarLog();
        this.rutas.navigate(['home']);
      } catch (error: any) {
        this.toastr.error(error.message, "Error", {
          timeOut: 3000
        });
      }
    }
    else {
      this.toastr.error("Debe completar un nombre de por lo menos 3 letras", "Error", {
        timeOut: 3000
      });
    }
  }

  guardarLog() {
    const fecha = new Date().toUTCString();
    this.dataLog.agregarLog('logUsuarios', { email: this.usuario.email, fecha: fecha }).catch(err =>
      console.error(err)
    );
  }
}
