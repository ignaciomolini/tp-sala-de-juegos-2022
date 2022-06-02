import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { DataLogService } from 'src/app/services/data-log.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private authService: AuthService, private rutas: Router, private toastr: ToastrService,
    private dataLog: DataLogService, private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.formRegister = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
    
    console.log(new Date().getDate());
  }

  async registerUser() {
    const { nombre, email, password } = this.formRegister.getRawValue();
    try {
      let uid = await (await this.authService.register(email, password)).user?.uid || '';
      await this.usuarioService.agregarUsuario({ nombre: nombre, email: email, password: password, uid: uid, perfil: 'jugador' })
      this.authService.modifyUserName(nombre);
      this.toastr.success("Registrado con exito", "OK", {
        timeOut: 3000
      });
      await this.authService.login(email, password);
      this.guardarLog();
      this.rutas.navigate(['home']);
    } catch (error: any) {
      this.toastr.error(error.message, "Error", {
        timeOut: 3000
      });
    }
  }

  guardarLog() {
    const { email } = this.formRegister.getRawValue();
    const fecha = new Date().getTime();
    this.dataLog.agregarLog('logUsuarios', { email: email, fecha: fecha }).catch(err =>
      console.error(err)
    );
  }
}

