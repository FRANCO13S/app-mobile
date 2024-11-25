import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { UserI } from '../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth ) { }

  login(correo: string, contra:string) {
    return signInWithEmailAndPassword(this.auth, correo, contra)
  }

  logut(){
    this.auth.signOut();
  }

  registrarUser(datos: UserI){
    return createUserWithEmailAndPassword(this.auth, datos.correo, datos.contra)
  }

  stateUser(){
    return authState(this.auth);
  }

  async getUid(){
    const user = await this.auth.currentUser;
    return user.uid;
  }

}

