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
// Add form validation for patrol fields to ensure data consistency.
// Enhance error handling to manage API call failures and form submission errors.
// Update the patrol creation logic to include logging and user feedback.


// Generated code snippets:
// Line 28: This API call needs better error handling for robustness.
this.patrolService.createPatrol(this.patrol).subscribe(data => console.log(data), error => console.log(error));

// Line 37: Ensure the navigation occurs only after a successful patrol creation.
this.router.navigate(['/patrols']);

