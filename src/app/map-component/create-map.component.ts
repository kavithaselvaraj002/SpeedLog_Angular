import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader} from '@googlemaps/js-api-loader'
import { VehicleService } from "../vehicle.service";
//import { truncateSync } from 'fs';
import { Vehicle } from "../vehicle";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { interval, Observable } from "rxjs";

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent implements OnInit {
  title = 'google-maps';
  map: google.maps.Map;
  locations: Vehicle[];
  allLocations: Vehicle[];
  markers: google.maps.Marker[] = [];

  //private map  = google.maps.Map;
  constructor(private vehicleService: VehicleService,
    private router: Router) {

    }
    getVehicleByLocations() {
      this.vehicleService.getVehicleByLocations()
        .subscribe(
          data => {
            this.allLocations = data;
            console.log(data);
            for (let locationData of this.allLocations) {
              // The marker's position property needs an object like { lat: 0, lng: 0 };
              // Number(location.latitude) is there to convert the string to a number, but if it's a number already, there's no need to cast it further.
              let latLngData = {lat: Number(locationData.lat), lng: Number(locationData.lng)};
              const marker4 = new google.maps.Marker({
                position:latLngData,
                map:this.map,
                title:"test2",
                label: {
                  text:locationData.vehicleNumber,
                  color: "RED",
                  fontWeight:"bold"
              },
                animation: google.maps.Animation.BOUNCE,
                icon: 'http://maps.google.com/mapfiles/kml/shapes/cabs.png'
              // icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/cabs.png'
              })
              this.markers.push(marker4);
            }
           // this.reloadData();
          },
          error => console.log(error));
    }


    getVehicleByName(vehicleName: string) {
      this.vehicleService.getVehicleByNumber(vehicleName)
        .subscribe(
          data => {
            this.locations = data;
            console.log(data);
            for (let location of this.locations) {
              // The marker's position property needs an object like { lat: 0, lng: 0 };
              // Number(location.latitude) is there to convert the string to a number, but if it's a number already, there's no need to cast it further.
              let latLng = {lat: Number(location.lat), lng: Number(location.lng)};
              const marker3 = new google.maps.Marker({
                position:latLng,
                map:this.map,
                title:"test2",
                label: {
                  text:"POLICE",
                  color: "RED",
                  fontWeight:"bold"
              },
                animation: google.maps.Animation.BOUNCE,
                icon: 'http://maps.google.com/mapfiles/kml/shapes/cabs.png'
              // icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/cabs.png'
              })
            }
           // this.reloadData();
          },
          error => console.log(error));
    }

  ngOnInit() {
   // this.getVehicleByName("etest2");
    const secondsCounter = interval(20000);
// Subscribe to begin publishing values
secondsCounter.subscribe(n => {
  for (let i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(null);
  }
  this.getVehicleByLocations();
});

     
    
   // this.reloadData();
    let loader = new Loader({
      apiKey: 'AIzaSyC14wFlhw9l3yKbCGMvq5irB7gBBRPMX6s'
      
    })
    

   // http://localhost:8081/vehicle/location?carNumber=etest2
    const location1s = [
      { lat: 19.30243841662244, lng: -81.36762660797876 },
      { lat: 19.28793772224212, lng: -81.38350528567302 },
      { lat: 19.286317453137645, lng: -81.36522334865207 },
      { lat: 19.28631632614686, lng: -81.38736766673381 }
    ];
    //const locations:any;

    

    
    //this.locations = this.locations;
console.log("location"+this.locations)
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

      const marker = new google.maps.Marker({
        position:markerLocation,
        map:this.map,
        title:"test",
        animation: google.maps.Animation.BOUNCE,
       // icon: '../assets/images/caricon.png'
       icon:'http://maps.google.com/mapfiles/kml/shapes/motorcycling.png'
      })
        // Set the position and title


        var flightPlanCoordinates = [
      { lat: 19.29810454482719, lng: -81.35758441835928 },
      { lat: 19.28793772224212, lng: -81.38350528567302}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(this.map);

        const lineSymbol = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor: "#393",
        };
        //19.29300553235551, -81.3588465292548
        //19.288029441577287, -81.35392015096299
        const line = new google.maps.Polyline({
          path: [
            { lat: 19.29300553235551, lng:-81.3588465292548 },
            { lat: 19.288029441577287, lng: -81.35392015096299 }
          ],
          icons: [
            {
              icon: lineSymbol,
              offset: "100%",
            },
          ],
          map: this.map,
        });
      
       this.animateCircle(line);

       const lineSymbol1 = {
        path: "M 0,-1 0,1",
        strokeOpacity: 1,
        scale: 4,
      };
       const line1 = new google.maps.Polyline({
        path: [
          { lat: 19.2908030190307, lng: -81.36947713504243 },
          { lat: 19.282237407743754, lng: -81.37077355038238 },
        ],
        strokeOpacity: 0,
        icons: [
          {
            icon: lineSymbol1,
            offset: "0",
            repeat: "20px",
          },
        ],
        map: this.map,
      });
      const infoWindowOptions = {
        content: 'Display some Info',
        position: {lat:19.29810454482719, lng: -81.35758441835928},
        shouldFocus:true
      }
    const infoWindow = new google.maps.InfoWindow(infoWindowOptions)

    const infoWindowOpenOptions = {
      map: this.map,
      anchor:marker
    }
    infoWindow.open(infoWindowOpenOptions);

    setTimeout(()=> {
      infoWindow.close();
    },3000);


      
    })
    
   
    
  }
  animateCircle(line: google.maps.Polyline) {
    let count = 0;
  
    window.setInterval(() => {
      count = (count + 1) % 200;
  
      const icons = line.get("icons");
  
      icons[0].offset = count / 2 + "%";
      line.set("icons", icons);
    }, 20);
  }
  

}
