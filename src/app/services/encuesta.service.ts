import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  constructor(private afs: AngularFirestore) { }

  traerTodasLasEncuesta(){
    return this.afs.collection('encuestas').valueChanges();
  }

  agregarEncuesta(data: any) {
    return this.afs.collection("encuestas").add(data);
  }
}
