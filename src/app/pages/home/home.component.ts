import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogeado: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    })
  }

}
