import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherForecast } from '../models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getWeatherInfo(): Observable<ReadonlyArray<WeatherForecast>> {
    return this.http.get<ReadonlyArray<WeatherForecast>>(this.apiUrl + '/WeatherForecast');
  }
}
