import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fa: AngularFireAuth) { }

  public googleSignIn() {
    this.fa.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public signOut() {
    this.fa.signOut();
  }
}
