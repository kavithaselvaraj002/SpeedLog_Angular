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
    this.patrolService.createPatrol(this.patrol)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patrol = new Patrol();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/patrols']);
  }
}


// Generated modifications for src/app/create-patrol/create-patrol.component.ts
// Add input field validations such as required fields and character limits
// Improve error handling for API calls
// Include spinner or loading indication for API submission
// Use service response data for confirmation messages, if applicable


// Generated code snippets:
// Line 22: Logs error to console but lacks a robust error handling strategy
this.patrolService.createPatrol(this.patrol).subscribe(data => console.log(data), error => console.log(error));

