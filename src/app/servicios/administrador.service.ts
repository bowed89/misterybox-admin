import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  identity: string;

  constructor(
    public angularFirestore: AngularFirestore

  ) { }

   filtrarAdmin(usuario: string, password: string) {

    return this.angularFirestore.collection('administrador', ref =>  ref.where('usuario', '==', usuario).where('password', '==', password)).snapshotChanges();

  }

    getIdentity() {
      
      const usuario = JSON.parse(localStorage.getItem('usuario'));

      if (usuario !== 'undefined') {

        this.identity = usuario;

      } else {

        this.identity = null;

      }

      return this.identity;

  }

}
