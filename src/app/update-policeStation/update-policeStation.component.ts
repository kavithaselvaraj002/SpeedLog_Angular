import { Component, OnInit } from '@angular/core';
import { PoliceStation } from '../policeStation';
import { ActivatedRoute, Router } from '@angular/router';
import {PoliceStationService } from '../policeStation.service';

@Component({
  selector: 'app-update-policeStation',
  templateUrl: './update-policeStation.component.html',
  styleUrls: ['./update-policeStation.component.css']
})
export class UpdatePoliceStationComponent implements OnInit {

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

  updatePoliceStation() {
    this.policeStationService.updatePoliceStation(this.id, this.policeStation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.policeStation = new PoliceStation();
    this.gotoList();
  }

  onSubmit() {
    this.updatePoliceStation();    
  }

  gotoList() {
    this.router.navigate(['/policeStations']);
  }
}
