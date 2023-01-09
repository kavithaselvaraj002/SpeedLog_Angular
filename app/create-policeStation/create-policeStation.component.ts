import { PoliceStationService } from '../policeStation.service';
import { PoliceStation } from '../policeStation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-policeStation',
  templateUrl: './create-policeStation.component.html',
  styleUrls: ['./create-policeStation.component.css']
})
export class CreatePoliceStationComponent implements OnInit {

  policeStation: PoliceStation = new PoliceStation();
  submitted = false;

  constructor(private policeStationService: PoliceStationService,
    private router: Router) { }

  ngOnInit() {
  }

  newPoliceStation(): void {
    this.submitted = false;
    this.policeStation = new PoliceStation();
  }

  save() {
    this.policeStationService.createPoliceStation(this.policeStation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.policeStation = new PoliceStation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/policeStations']);
  }
}
