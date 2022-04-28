import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/classes/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DataLogService } from 'src/app/services/data-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private rutas: Router, private authService: AuthService, private toastr: ToastrService,
    private dataLog: DataLogService) {
    this.usuario = new Usuario('', '', '');
  }

  ngOnInit(): void { }

  async loginUser() {
    const { email, password } = this.usuario;
    try {
      await this.authService.login(email, password);
      this.guardarLog();
      this.rutas.navigate(['home']);
    }
    catch (error: any) {
      this.toastr.error(error.message, "Error", {
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

  accesoRapido() {
    const checkbox: any = document.getElementById('accRap');

    if (checkbox.checked) {
      this.usuario.email = 'ejemplo@gmail.com';
      this.usuario.password = '123456';
    }
    else {
      this.usuario.email = '';
      this.usuario.password = '';
    }
  }
}
