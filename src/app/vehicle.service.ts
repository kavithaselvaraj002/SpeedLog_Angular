import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../../src/app/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8081/vehicle';
  private basePUrl = 'http://localhost:8081/vehicle/all';
  private getUrl ='http://localhost:8081/vehicle/location?carNumber=etest2';
  private locationUrl: 'http://localhost:8081/vehicle/locations';
  private locUrl = 'http://localhost:8081/policeStation/vehicles'
  private stationName: string;
  constructor(private http: HttpClient) { }
  private data = {};  

  getVehicle(vehicleNumber: string): Observable<any> {
    return this.http.get('http://localhost:8081/vehicle?vehicleNumber='+`${vehicleNumber}`);
  }

  getPatrolByVehicleNumber(vehicleNumber: string): Observable<any> {
    return this.http.get('http://localhost:8081/patrol/vehicle?patrolNumber='+`${vehicleNumber}`);
  }

  getPatrolDetailsByVehicleNumber(patrolNumber: string): Observable<any> {
    return this.http.get('http://localhost:8081/patrol/patrolDetails?patrolNumber='+`${patrolNumber}`);
  }
  //http://localhost:8081/patrol/patrolDetails?patrolNumber=test1

  createVehicle(vehicle: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, vehicle);
  }

  updateVehicle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  associateVehicleWithPatrol(vehicleName: string, patrolName: string,value:any): Observable<any> {
   // return this.http.get('http://localhost:8081/patrol/vehicle?patrolNumber='+`${patrolName}`);
  //}
   // http://localhost:8081/patrol/vehicle?patrolNumber=test1&vehicleNumber=etest2 

    //http://localhost:8081/patrol/vehicle?patrolNumber=etest2&vehicleNumber=etest2
      http://localhost:8081/patrol/vehicle?patrolNumber=etest2&vehicleNumber=etest2
    console.log('http://localhost:8081/patrol/vehicle?patrolNumber='+`${patrolName}`+'&vehicleNumber='+`${vehicleName}`);
    return this.http.put('http://localhost:8081/patrol/vehicle?patrolNumber='+`${patrolName}`+'&vehicleNumber='+`${vehicleName}`, value);
   // return value;
  }


  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVehiclesList(): Observable<any> {
    return this.http.get(`${this.basePUrl}`);
  }

  getVehicleByNumber(carNumber:string):  Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }



  getVehicleByLocations():Observable<any> {
    return this.http.get('http://localhost:8081/vehicle/locations');
  }
  setOption(option, value) {      
    this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  

  getStationName():string{
    return this.stationName;
  }
  setStationName(val: string){
    this.stationName = val;
  }

  getVehiclesForPoliceStation(policeStationName:any):Observable<any> {
    return this.http.get('http://localhost:8081/policeStation/vehicles?policeStationName='+`${policeStationName}`)

  }
}
