import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataLogService {

  constructor(private firestore: AngularFirestore) { }

  agregarLog(collection: any, data: any){
    return this.firestore.collection(collection).add(data);
  }
}
