import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  constructor(private afs: AngularFirestore) { }

  cargarPuntajes(collection: string, order: string){
    let itemsCollection = this.afs.collection(collection, ref =>  ref.orderBy(order, 'asc').limit(10));
    return itemsCollection.valueChanges().pipe(map((puntajes) => {
      const arrayPuntajes = [];
      for (let puntaje of puntajes) {
        arrayPuntajes.unshift(puntaje);
      }
      return arrayPuntajes;
    }));
  }

  agregarPuntaje(collection: string, data: any) {
    return this.afs.collection(collection).add(data);
  }
}
