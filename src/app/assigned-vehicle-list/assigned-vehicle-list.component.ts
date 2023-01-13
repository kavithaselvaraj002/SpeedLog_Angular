import { VehicleDetailsComponent } from '../vehicle-details/vehicle-details.component';
import { Observable } from "rxjs";
import { VehicleService } from "../vehicle.service";
import { Vehicle } from "../vehicle";
import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./assigned-vehicle-list.component.html",
  styleUrls: ["./assigned-vehicle-list.component.css"]
})
export class AssignedVehicleListComponent implements OnInit {
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
  this.patrols = this.vehicleService.getPatrolDetailsList(this.vehicleName)
  }
  

  viewLocation(carnumber: string){
    localStorage.setItem("vehicleNumber",carnumber)
    this.router.navigate(['assignedMap']);
  }
}
