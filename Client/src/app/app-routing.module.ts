import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'weather-info', component: WeatherInfoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'weather-info', pathMatch: 'full' },
  { path: '**', redirectTo: 'weather-info', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
