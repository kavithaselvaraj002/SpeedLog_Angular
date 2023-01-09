import { Patrol } from '../patrol';
import { Component, OnInit, Input } from '@angular/core';
import { PatrolService } from '../patrol.service';
import { PatrolListComponent } from '../patrol-list/patrol-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patrol-details',
  templateUrl: './patrol-details.component.html',
  styleUrls: ['./patrol-details.component.css']
})
export class PatrolDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['patrols']);
  }
}
