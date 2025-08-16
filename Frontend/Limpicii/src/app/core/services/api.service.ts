
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TennisCourt {
  id: number;
  name: string;
  location: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCourts(): Observable<TennisCourt[]> {
    return this.http.get<TennisCourt[]>(`${this.baseUrl}/weatherforecast`);
  }
}
