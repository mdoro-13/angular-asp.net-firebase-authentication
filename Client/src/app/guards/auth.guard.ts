import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  validSession = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getAuthState().subscribe(authState => this.validSession = authState != null);
  }

  canActivate(): Observable<boolean> {
    return this.authService.getAuthState().pipe(
      map((authState) => {
        if (authState) {
          return true;
        }
        this.router.navigateByUrl('/auth');
        return false;
      })
    )
  }
}

