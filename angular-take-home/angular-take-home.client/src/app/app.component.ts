import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Product {
    Title: string;
    Price: number;
    Author: string;
    Genre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  public product: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  title = 'angular-take-home.client';
}
