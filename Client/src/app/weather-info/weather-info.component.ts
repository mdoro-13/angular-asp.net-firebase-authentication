import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  weatherInfo!: Observable<ReadonlyArray<WeatherForecast>>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.weatherInfo = this.apiService.getWeatherInfo();
  }
}
