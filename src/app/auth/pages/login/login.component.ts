import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DataLogService } from 'src/app/services/data-log.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  sub?: Subscription;

  constructor(private rutas: Router, private authService: AuthService, private toastr: ToastrService,
    private dataLog: DataLogService, private usuarioService: UsuarioService) {
    this.usuario = new Usuario('', '', '', '', '');
  }

  ngOnInit(): void { }

  async loginUser() {
    const { email, password } = this.usuario;
    try {
      let uid = await (await this.authService.login(email, password)).user?.uid;
      this.sub = this.usuarioService.traerTodosLosUsuarios().subscribe(usuarios => {
        usuarios.forEach((usuario: Usuario) => {
          if (usuario.uid == uid) {
            localStorage.setItem('usuario', JSON.stringify(usuario));
            this.sub?.unsubscribe();
          }
        })
      })
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
    const fecha = new Date().getTime();
    this.dataLog.agregarLog('logUsuarios', { email: this.usuario.email, fecha: fecha }).catch(err =>
      console.error(err)
    );
  }

  accesoRapido() {
    const select: any = document.getElementById('select-usuario');

    switch (select.value) {
      case 'admin':
        this.usuario.email = 'admin@gmail.com';
        this.usuario.password = '123456';
        break;
      case 'jugador1':
        this.usuario.email = 'jugador1@gmail.com';
        this.usuario.password = '123456';
        break;
      case 'jugador2':
        this.usuario.email = 'jugador2@gmail.com';
        this.usuario.password = '123456';
        break;
      default:
        this.usuario.email = '';
        this.usuario.password = '';
    }
  }
}

