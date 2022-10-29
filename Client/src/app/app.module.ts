import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { NavComponent } from './nav/nav.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WeatherInfoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoolSocialLoginButtonsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-center' })
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
