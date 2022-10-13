import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authState!: Observable<firebase.User | null>;
  loginForm: any;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authState = this.authService.getAuthState();
    this.initializeForm();
  }

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
