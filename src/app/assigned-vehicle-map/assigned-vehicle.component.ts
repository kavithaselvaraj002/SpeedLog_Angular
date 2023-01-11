import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader} from '@googlemaps/js-api-loader'
import { VehicleService } from "../vehicle.service";
//import { truncateSync } from 'fs';
import { Vehicle } from "../vehicle";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { interval, Observable } from "rxjs";

@Component({
  selector: 'assigned-vehicle',
  templateUrl: './assigned-vehicle.component.html',
  styleUrls: ['./assigned-vehicle.component.css']
})
export class AssignedVehicleComponent implements OnInit {
  title = 'google-maps';
  map: google.maps.Map;
  locations: Vehicle[];
  allLocations: Vehicle[];
  markers: google.maps.Marker[] = [];

  //private map  = google.maps.Map;
  constructor(private vehicleService: VehicleService,
    private router: Router) {

    }

    getVehicleByName(vehicleName: string) {
      this.vehicleService.getPatrolDetailsByVehicleNumber(vehicleName)
        .subscribe(
          data => {
            this.locations = data;
            const icon = {

              url: "http://maps.google.com/mapfiles/kml/shapes/cabs.png", // url

              scaledSize: new google.maps.Size(20, 20) // scaled size

          };
            console.log(data);
            for (let location of this.locations) {
              // The marker's position property needs an object like { lat: 0, lng: 0 };
              // Number(location.latitude) is there to convert the string to a number, but if it's a number already, there's no need to cast it further.
              let latLng = {lat: Number(location.vehiclelatitude), lng: Number(location.vehicleLongitude)};
              const marker3 = new google.maps.Marker({
                position:latLng,
                map:this.map,
                title:"test2",
                label: {
                  text:location.carNumber,
                  color: "RED",
                  fontWeight:"bold"
              },
                //animation: google.maps.Animation.BOUNCE,
                icon: icon,
              // icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/cabs.png'
              })
              this.markers.push(marker3);
            }
           // this.reloadData();
          },
          error => console.log(error));
    }
    getPatrolLocation(vehicleName: string) {
      this.vehicleService.getPatrolDetailsByVehicleNumber(vehicleName)
        .subscribe(
          data => {
            this.locations = data;
            const icon = {

              url: "http://maps.google.com/mapfiles/kml/shapes/cabs.png", // url

              scaledSize: new google.maps.Size(20, 20) // scaled size

          };
            for (let location of this.locations) {
              // The marker's position property needs an object like { lat: 0, lng: 0 };
              // Number(location.latitude) is there to convert the string to a number, but if it's a number already, there's no need to cast it further.
              let latLng = {lat: Number(location.patrolLatitude), lng: Number(location.patrolLongitude)};
              const marker4 = new google.maps.Marker({
                position:latLng,
                map:this.map,
                title:"test2",
                label: {
                  text:location.vehicleNumber,
                  color: "RED",
                  fontWeight:"bold"
              },
                //animation: google.maps.Animation.BOUNCE,
                icon: icon,
              // icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/cabs.png'
              })
              this.markers.push(marker4);
            }
           // this.reloadData();
          },
          error => console.log(error));
    }
  ngOnInit() {
   // this.getVehicleByName("etest2");
    const secondsCounter = interval(20000);
    //getPatrolByVehicleNumber
// Subscribe to begin publishing values
secondsCounter.subscribe(n => {
  for (let i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(null);
  }
  const vehiclenumber = localStorage.getItem("vehicleNumber")
  this.getVehicleByName(vehiclenumber);
  this.getPatrolLocation(vehiclenumber);
});

     
    
   // this.reloadData();
    let loader = new Loader({
      apiKey: 'API-KEY'
      
    })
    
    loader.load().then(()=>{
      const location = {
        lat:19.289193419745192,
        lng: -81.36917155103163
      };
      const markerLocation = {
        lat:19.29810454482719,
        lng: -81.35758441835928
      };
       this.map =new google.maps.Map(document.getElementById("map"),{
        center:location,
        zoom: 15
      })
    })
   
    
  }

  

}
