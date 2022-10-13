import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fa: AngularFireAuth, private toastr: ToastrService, private router: Router) {

  }

  public googleSignIn() {
    this.fa.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      console.log(response)
      this.router.navigateByUrl('/weather-info')
    }).catch(error => {
      console.log(error)
    });
  }

  public registerInWithEmailAndPassword(email: string, password: string) {
    this.fa.createUserWithEmailAndPassword(email, password).then((response) => {
      response.user?.sendEmailVerification();
      this.toastr.success('A verification link has been sent to your email address. Once you\'ve confirmed it, you can log in!', 'Email confirmation');
      this.signOut();
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  public logInWithEmailAndPassword(email: string, password: string) {
    this.fa.signInWithEmailAndPassword(email, password).then((response) => {
      if (!response.user?.emailVerified) {
        this.toastr.error('You cannot sign in until the email has been verified');
        this.signOut();
      }

      console.log(response)
      this.router.navigateByUrl('/weather-info')
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
