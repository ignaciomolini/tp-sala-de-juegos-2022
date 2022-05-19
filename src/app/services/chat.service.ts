import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  itemsCollection?: AngularFirestoreCollection<Mensaje>;

  constructor(private afs: AngularFirestore) {
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(10));
    return this.itemsCollection.valueChanges().pipe(map((mensajes: Mensaje[]) => {
      const chats = [];
      for (let mensaje of mensajes) {
        chats.unshift(mensaje);
      }
      return chats;
    }));
  }

  agregarMensaje(texto: string, nombreUsuario: string, uidUsuario: string) {
    let mensaje: Mensaje = {
      nombre: nombreUsuario,
      mensaje: texto,
      fecha: new Date().getTime(),
      hora: this.conseguirHora(),
      uid: uidUsuario
    }
    return this.itemsCollection?.add(mensaje);
  }

  private conseguirHora() {
    const fecha = new Date();
    let horas: number = fecha.getHours();
    let minutos: any = fecha.getMinutes();
    const ampm: string = (horas >= 12) ? 'p. m.' : 'a. m.';

    horas = (horas >= 12) ? horas - 12 : horas;
    horas = horas ? horas : 12;
    minutos = (minutos < 10) ? ('0' + minutos) : minutos;
    return `${horas}:${minutos} ${ampm}`;
  }
}
