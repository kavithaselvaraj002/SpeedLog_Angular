import { PoliceStationDetailsComponent } from '../policeStation-details/policeStation-details.component';
import { Observable } from "rxjs";
import { PoliceStationService } from "../policeStation.service";
import { PoliceStation } from "../policeStation";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-policeStation-list",
  templateUrl: "./policeStation-list.component.html",
  styleUrls: ["./policeStation-list.component.css"]
})
export class PoliceStationListComponent implements OnInit {
  patrols: Observable<PoliceStation[]>;

  constructor(private policeStationService: PoliceStationService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patrols = this.policeStationService.getPoliceStationsList();
  }

  deletePatrol(id: number) {
    this.policeStationService.deletePoliceStation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  policeStationDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePoliceStation(id: number){
    this.router.navigate(['update', id]);
  }
}
