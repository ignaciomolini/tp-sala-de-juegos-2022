import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = this.authService.getCurrentUser();

  constructor(private authService: AuthService, private rutas: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  async logoutUser(){
    try {
      await this.authService.logout();
      this.rutas.navigate(['login']);
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
