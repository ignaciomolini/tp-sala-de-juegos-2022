import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataLogService {

  constructor(private firestore: AngularFirestore) { }

  async agregarLog(collection: any, data: any){
    return await this.firestore.collection(collection).add(data);
  }
}
