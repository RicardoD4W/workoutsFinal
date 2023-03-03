import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutsService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {
  protected oneWorkout! : any;


  constructor(private activeRouting : ActivatedRoute, private workService : WorkoutsService){}

  ngOnInit(): void {
    this.activeRouting.params.subscribe(({id})=>{
      this.workService.getOneWorkout(id).subscribe((res)=>{
        this.oneWorkout = res.workout;
        console.log(this.oneWorkout);
      })
    })

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
