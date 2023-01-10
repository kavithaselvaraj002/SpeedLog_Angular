
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliceStationService } from "../policeStation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stationName: string='';
  vehicleName: string='';
  
  isClicked=false;
  submitted = false;

  constructor(private vehicleService: PoliceStationService,
    private router: Router) { }

  ngOnInit() {
    console.log("station name");
    console.log(this.stationName);
  }
  clickme() {
    console.log('it does nothing',this.stationName);
  }


  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.isClicked=true;
    console.log(this.stationName);
    localStorage.setItem("stationName",this.stationName);
    localStorage.setItem("isStation","true");
   // this.vehicleService.setOption

    this.router.navigate(['/vehicles']);
  }
  gotoVehicleList() {
    this.isClicked=true;
    console.log(this.vehicleName);
    localStorage.setItem("vehicleName",this.vehicleName);
    localStorage.setItem("isStation","false");

   // this.vehicleService.setOption
   //this.router.navigate(['/app']);
 
    this.router.navigate(['/vehicles']);
  }
}
