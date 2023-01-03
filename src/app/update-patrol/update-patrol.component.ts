import { Component, OnInit } from '@angular/core';
import { Patrol } from '../patrol';
import { ActivatedRoute, Router } from '@angular/router';
import { PatrolService } from '../patrol.service';

@Component({
  selector: 'app-update-patrol',
  templateUrl: './update-patrol.component.html',
  styleUrls: ['./update-patrol.component.css']
})
export class UpdatePatrolComponent implements OnInit {

  id: number;
  patrol: Patrol;

  constructor(private route: ActivatedRoute,private router: Router,
    private patrolService: PatrolService) { }

  ngOnInit() {
    this.patrol = new Patrol();

    this.id = this.route.snapshot.params['id'];
    
    this.patrolService.getPatrol(this.id)
      .subscribe(data => {
        console.log(data)
        this.patrol = data;
      }, error => console.log(error));
  }

  updatePatrol() {
    this.patrolService.updatePatrol(this.id, this.patrol)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patrol = new Patrol();
    this.gotoList();
  }

  onSubmit() {
    this.updatePatrol();    
  }

  gotoList() {
    this.router.navigate(['/patrols']);
  }
}
