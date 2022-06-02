import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formLogin: FormGroup;

  constructor(private rutas: Router, private authService: AuthService, private toastr: ToastrService,
    private dataLog: DataLogService, private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.usuario = new Usuario('', '', '', '', '');
    this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void { }

  async loginUser() {
    const { email, password } = this.formLogin.getRawValue();
    console.log(email, password)
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
        this.formLogin.controls['email'].setValue('admin@gmail.com');
        this.formLogin.controls['password'].setValue('123456');
        break;
      case 'jugador1':
        this.formLogin.controls['email'].setValue('jugador1@gmail.com');
        this.formLogin.controls['password'].setValue('123456');
        break;
      case 'jugador2':
        this.formLogin.controls['email'].setValue('jugador2@gmail.com');
        this.formLogin.controls['password'].setValue('123456');
        break;
      default:
        this.formLogin.controls['email'].setValue('');
        this.formLogin.controls['password'].setValue('');
    }
  }
}

