import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  constructor(private afs: AngularFirestore) { }

  agregarEncuesta(data: any) {
    return this.afs.collection("encuestas").add(data);
  }
}
