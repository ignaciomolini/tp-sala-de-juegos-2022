import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { EncuestaService } from '../services/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  formEncuesta: any;
  usuario: any;

  constructor(private fb: FormBuilder, private encuestaService: EncuestaService, private toastr: ToastrService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.inicializarForm();
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  inicializarForm() {
    this.formEncuesta = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99),
      Validators.pattern(/^\d+$/)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), 
      Validators.pattern(/^\d+$/)]),
      preguntaPuntaje: new FormControl('', [Validators.required]),
      preguntaJuego: new FormControl('', [Validators.required]),
      preguntaMejorar: new FormControl('', [Validators.required])
    });
  }

  async guardarEncuesta() { 
    let encuesta = {...this.formEncuesta.getRawValue(), emailUsuario: this.usuario.email};
    try {
      await this.encuestaService.agregarEncuesta(encuesta);
      this.toastr.success('Guardado con exito!','OK');   
    } catch (error) {
      console.log(error);
      this.toastr.error( 'Error al guardar!', 'ERROR');  
    }
  }

}
