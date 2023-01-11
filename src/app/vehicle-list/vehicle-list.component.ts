import { VehicleDetailsComponent } from '../vehicle-details/vehicle-details.component';
import { Observable } from "rxjs";
import { VehicleService } from "../vehicle.service";
import { Vehicle } from "../vehicle";
import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"]
})
export class VehicleListComponent implements OnInit {
  patrols: Observable<Vehicle[]>;
  patrolUpdated: Observable<Vehicle[]>;
  stationName: String;
  isStation: string;
  vehicleName: string;
  isVehicle: boolean;
  isRequired:boolean;
  vehicle: any;
  isVehicleRequired:boolean;
  constructor(private route: ActivatedRoute,private vehicleService: VehicleService,
    private router: Router) {}

  ngOnInit() {
    this.vehicle = new Vehicle();
    if(this.isStation==="true") {
      this.isVehicle = false;
    }
    else {
      this.isVehicle = true;
    }
    this.isVehicleRequired = true;
    this.reloadData();

   // this.stationName = this.route.snapshot.params['stationName'];
  }

  reloadData() {
  //  this.patrols = this.vehicleService.getVehiclesList();
  this.stationName = localStorage.getItem("stationName")
  this.vehicleName = localStorage.getItem("vehicleName")
  this.isStation = localStorage.getItem("isStation")
  if(this.isStation==="true") {
  this.patrols = this.vehicleService.getVehiclesForPoliceStation(this.stationName);
  }
  else {
   // this.patrols =  this.vehicleService.getVehicle(this.vehicleName);
    this.patrols =  this.vehicleService.getPatrolByVehicleNumber(this.vehicleName);
  }
  }
  deleteVehicle(id: number) {
    this.vehicleService.deleteVehicle(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  patrolVehciles(id: number){
    this.router.navigate(['details', id]);
  }

  viewLocation(carnumber: string){
    localStorage.setItem("vehicleNumber",carnumber)
    this.router.navigate(['map']);
  }
  followVehicle(vehicleNumber: string){
    console.log("testing")
 //   this.router.navigate(['UpdateVehicleComponent']);
   // this.vehicleService.getVehiclesForPoliceStation(this.stationName);
  // this.vehicle = this.vehicleService.associateVehicleWithPatrol(vehicleNumber,this.vehicleName,this.vehicle)
  this.patrols = this.vehicleService.associateVehicleWithPatrol(vehicleNumber,this.vehicleName,this.vehicle)
    //this.reloadData();
    //.subscribe(data => console.log(data), error => console.log(error));
   // this.vehicleService.associateVehicleWithPatrol(vehicleNumber,this.vehicleName,this.vehicle);
    //localStorage.setItem("vehicleNumber",carnumber)
    //this.router.navigate(['map']);
  }
}
