import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private afs: AngularFirestore) { }

  traerTodosLosUsuarios(){
    return this.afs.collection<Usuario>('usuarios').valueChanges();
  }

  agregarUsuario(usuario: Usuario){
    return this.afs.collection<Usuario>('usuarios').add(usuario);
  }
}
