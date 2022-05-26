import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilGuard implements CanActivate {
  constructor(private toastr: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificarPerfil(route);
  }

  verificarPerfil(route: ActivatedRouteSnapshot){
    let usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if(usuario.perfil == route.data['perfil']){
      return true;
    }
    this.toastr.error('Para ingresar aqui debe ser admin', 'Error');
    return false;
  }
  
}
