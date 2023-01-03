import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliceStationService {

  private baseUrl = 'http://localhost:8081/policeStation';

  constructor(private http: HttpClient) { }

  getPoliceStation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPoliceStation(patrol: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patrol);
  }

  updatePoliceStation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePoliceStation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPoliceStationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
