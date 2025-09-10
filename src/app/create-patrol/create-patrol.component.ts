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
// Include a success confirmation message to the user upon successful patrol creation.
// Add error handling for API failures during the `save` function.
// Ensure input validation for patrol details using Angular reactive forms or template-driven form validation.


// Generated code snippets:
// Line 37: Needs proper error handling and a success message for better user experience.
this.patrolService.createPatrol(this.patrol).subscribe(data => console.log(data), error => console.log(error));

