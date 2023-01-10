import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Speed Log';
  isStation: string;
  isVehicle: boolean;
  isRequired:boolean;
  isVehicleRequired:boolean;
  ngOnInit() {
   // this.isVehicle = true;
    console.log("inside app component ts file")
  this.isStation = localStorage.getItem("isStation")
  if(this.isStation==="true") {
    this.isVehicle = false;
  }
  else {
    this.isVehicle = true;
  }
  this.isVehicleRequired = true;
  //this.showAndHideItems();
  
  }

  showAndHideItems() {
    if(this.isStation==="true") {
      this.isVehicle = false;
    }
    else {
      this.isVehicle = true;
    }
  }

}
