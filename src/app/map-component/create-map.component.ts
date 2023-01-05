
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader} from '@googlemaps/js-api-loader'

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent implements OnInit {
  title = 'google-maps';
  //map: google.maps.Map;


  ngOnInit() {
    let loader = new Loader({
      apiKey: 'AIzaSyC7rysP9Rbn5Z0FNbi-fG6Q_2xP7x2vfVA'

    })
    
    loader.load().then(()=>{
      const map =new google.maps.Map(document.getElementById("map"),{
        center:{lat: 19.289193419745192,lng: -81.36917155103163},
        zoom: 15
      })
    })
    
  }

  

}
