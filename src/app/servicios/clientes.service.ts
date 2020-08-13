import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    public angularFirestore: AngularFirestore
  ) { }

  obtenerClientes() {

    return this.angularFirestore.collection('clientes').snapshotChanges();

  }

}
