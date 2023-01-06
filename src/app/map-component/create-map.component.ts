import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader} from '@googlemaps/js-api-loader'
import { truncateSync } from 'fs';

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent implements OnInit {
  title = 'google-maps';
  map: google.maps.Map;
  //private map  = google.maps.Map;

  ngOnInit() {
    let loader = new Loader({
      apiKey: 'API KEY'

    })
    
    loader.load().then(()=>{
      const location = {
        lat:19.289193419745192,
        lng: -81.36917155103163
      };
      const location2 = {
        lat:19.29810454482719,
        lng: -81.35758441835928
      };
     // 19.29810454482719, -81.35758441835928
       this.map =new google.maps.Map(document.getElementById("map"),{
        center:location,
        zoom: 15
      })

      const marker = new google.maps.Marker({
        position:location2,
        map:this.map,
        title:"test",
       // icon: '../assets/icons/caricon.png'
      })
    })
   
    
  }

  

}

