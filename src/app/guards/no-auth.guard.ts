import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router,  private toastr: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificarAutenticacion();
  }

  verificarAutenticacion(){
    if(!localStorage.getItem('usuario')){
      return true;
    }
    this.toastr.error('Para ingresar aqui debe estar deslogeado', 'Error');
    this.router.navigate(['']);
    return false;
  } 
  
}
