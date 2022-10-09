import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fa: AngularFireAuth, private toastr: ToastrService) { }

  public googleSignIn() {
    this.fa.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  }

  public registerInWithEmailAndPassword(email: string, password: string) {
    this.fa.createUserWithEmailAndPassword(email, password).then((response) => {
      response.user?.sendEmailVerification();
      this.toastr.success('A verification link has been sent to your email address. Once you\'ve confirmed it, you can log in!', 'Email confirmation');
      this.signOut();
    }).catch((error) => {
      console.log(error)
    })
  }

  public signOut() {
    this.fa.signOut().then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  public getAuthState() {
    return this.fa.authState;
  }
}
