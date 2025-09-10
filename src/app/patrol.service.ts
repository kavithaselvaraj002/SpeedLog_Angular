import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatrolService {

  private baseUrl = 'http://localhost:8081/patrol';

  constructor(private http: HttpClient) { }

  getPatrol(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPatrol(patrol: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patrol);
  }

  updatePatrol(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePatrol(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPatrolsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getPatrolsForPoliceStation(policeStationName:any):Observable<any> {
    return this.http.get('http://localhost:8081/policeStation/patrols?policeStationName='+`${policeStationName}`)

  }

}


// Generated modifications for src/app/patrol.service.ts
// Ensure that errors are caught and meaningful messages are passed back to the component.


// Generated code snippets:
// Line 0: Needs to handle errors properly and return helpful messages.
return this.http.post('/api/patrols', patrol).pipe(catchError(error => { ... }));

