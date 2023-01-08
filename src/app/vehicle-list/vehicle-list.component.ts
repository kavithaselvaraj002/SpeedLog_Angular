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
  stationName: String;
  constructor(private route: ActivatedRoute,private vehicleService: VehicleService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();

   // this.stationName = this.route.snapshot.params['stationName'];
  }

  reloadData() {
  //  this.patrols = this.vehicleService.getVehiclesList();
  this.stationName = localStorage.getItem("stationName")
  this.patrols = this.vehicleService.getVehiclesForPoliceStation(this.stationName);
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

  updateVehicle(id: number){
    this.router.navigate(['update', id]);
  }
}
