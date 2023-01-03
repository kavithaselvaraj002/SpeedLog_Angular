import { PoliceStation } from '../policeStation';
import { Component, OnInit, Input } from '@angular/core';
import { PoliceStationService } from '../policeStation.service';
import { PoliceStationListComponent } from '../policeStation-list/policeStation-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policeStation-details',
  templateUrl: './policeStation-details.component.html',
  styleUrls: ['./policeStation-details.component.css']
})
export class PoliceStationDetailsComponent implements OnInit {

  id: number;
  policeStation: PoliceStation;

  constructor(private route: ActivatedRoute,private router: Router,
    private policeStationService: PoliceStationService) { }

  ngOnInit() {
    this.policeStation = new PoliceStation();

    this.id = this.route.snapshot.params['id'];
    
    this.policeStationService.getPoliceStation(this.id)
      .subscribe(data => {
        console.log(data)
        this.policeStation = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['policeStations']);
  }
}
