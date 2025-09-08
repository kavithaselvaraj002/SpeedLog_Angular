import { PatrolService } from '../patrol.service';
import { Patrol } from '../patrol';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patrol',
  templateUrl: './create-patrol.component.html',
  styleUrls: ['./create-patrol.component.css']
})
export class CreatePatrolComponent implements OnInit {

  patrol: Patrol = new Patrol();
  submitted = false;

  constructor(private patrolService: PatrolService,
    private router: Router) { }

  ngOnInit() {
  }

  newPatrol(): void {
    this.submitted = false;
    this.patrol = new Patrol();
  }

  save() {


    try {
    this.patrolService.createPatrol(this.patrol)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patrol = new Patrol();
    this.gotoList();
  }

  onSubmit() {


    try {
    this.submitted = true;
    this.save();    
  }

  gotoList() {


    try {
    this.router.navigate(['/patrols']);
  }

  newPatrol(): void {
    // TODO: Implement newPatrol
    // This file already contains the logic for creating patrols. Updates may be needed to align with the ticket requirements or improve functionality.
    try {
      // Implementation here
    } catch (error) {
      console.error('Error in newPatrol:', error);
      throw error;
    }
  }

}
