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


// Generated modifications for app/create-patrol/create-patrol.component.ts
// Ensure the patrol creation form handles all required fields as per business logic.
// Implement data validation for patrol fields before saving.
// Improve error handling for API calls.
// Ensure loading states are managed during API calls.


// Generated code snippets:
// Line 13: Improve error handling and remove console.logs for better logging practices.
this.patrolService.createPatrol(this.patrol).subscribe(data => console.log(data), error => console.log(error));

// Line 15: Check if navigation logic meets post-creation requirements.
this.router.navigate(['/patrols']);

