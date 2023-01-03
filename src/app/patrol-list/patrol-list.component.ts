import { PatrolDetailsComponent } from '../patrol-details/patrol-details.component';
import { Observable } from "rxjs";
import { PatrolService } from "./../patrol.service";
import { Patrol } from "../patrol";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-patrol-list",
  templateUrl: "./patrol-list.component.html",
  styleUrls: ["./patrol-list.component.css"]
})
export class PatrolListComponent implements OnInit {
  patrols: Observable<Patrol[]>;

  constructor(private patrolService: PatrolService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patrols = this.patrolService.getPatrolsList();
  }

  deletePatrol(id: number) {
    this.patrolService.deletePatrol(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  patrolDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePatrol(id: number){
    this.router.navigate(['update', id]);
  }
}
